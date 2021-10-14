import { createClient } from 'contentful'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken:process.env.CONTENTFUL_ACCESS_KEY
	})

	const res = await client.getEntries({content_type: 'blog'})

	return {
		props: {
			blogs: res.items
		}
	}
}

const Home = ({blogs}) => {
	console.log('blogs', blogs)
	return (
		<div>
			<h1 className={styles.title}>
				MediaValet Blogs
			</h1>
			<div className='blog-list'>
				{
					blogs?.map(blog => <BlogCard key={blog?.sys?.id} blog={blog} />)
				}
				<style jsx>{`
					.blog-list {
						margin-top: 40px;
						display:grid;
						grid-template-columns:1fr 1fr;
						grid-gap: 20px 60px;
					}
				`}
				</style>
			</div>
		</div>
	)
}

const BlogCard = ({blog}) => {
	const {title, subtitle, slug, image} = blog?.fields
	return (
		// eslint-disable-next-line @next/next/link-passhref
		<Link href={`/blog/${slug}`}>
			<div 
				style={{
					border:'1px solid #ccc',
					padding:'0px 25px 25px',
					borderRadius:5,
					marginBottom:20
				}}
			>
				<h3>{title}</h3>
				<Image
					src={`https:${image?.fields?.file?.url}`}
					alt={image?.fields?.file?.fileName}
					width={image?.fields?.file?.details?.image?.width}
					height={image?.fields?.file?.details?.image?.height}
				/>
				<div
					style={{
						marginTop:10
					}}
				>
					{subtitle}
				</div>
			</div>
		</Link>
	)
}

export default Home