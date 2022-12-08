// myS3FilePreviewCarousel.js
import { LightningElement, track } from 'lwc';

export default class MyS3FilePreviewCarousel extends LightningElement {
    @track s3Links = [];

    connectedCallback() {
        this.s3Links = [
            'https://s3.amazonaws.com/my-bucket/my-file1.png',
            'https://s3.amazonaws.com/my-bucket/my-file2.png',
            'https://s3.amazonaws.com/my-bucket/my-file3.png'
        ];
    }

    get s3LinkPreviews() {
        return this.s3Links.map(link => {
            return {
                preview: link,
                alt: link
            }
        });
    }
}
