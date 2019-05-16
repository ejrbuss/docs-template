import Link  from 'next/link';

export default ({ home, api }) => (
    <>
        <Link href='/docs-template/index'><a className={`m-md ${home ? 'active' : ''}`}><i className='fas fa-home' />Home</a></Link>
        <Link href='/docs-template/api'><a className={`m-md ${api ? 'active' : ''}`}><i className='fas fa-book' />API</a></Link>
        <Link href='/docs-template/download'><a className='m-md'><i className='fas fa-cloud-download-alt' />Download</a></Link>
    </>
);