// Create a BlogPost class that has
    // an authorName
    // a title
    // a text
    // a publicationDate
// Create a few blog post objects:
    // "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
        // Lorem ipsum dolor sit amet.
    // "Wait but why" titled by Tim Urban posted at "2010.10.10."
        // A popular long-form, stick-figure-illustrated blog about almost everything.
    // "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
        // Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked 
        // to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the 
        // whole organizer profile thing.

let tooLongText: string = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'

class blogPost{
    _authorName: string;
    _title: string;
    _text: string;
    _publicationDate: string;

    constructor(authorName: string, title: string, text: string, publicationDate?: string){
        this._authorName = authorName;
        this._title = title;
        this._text = text;
        if(publicationDate){
            this._publicationDate = publicationDate
        }else{
            this._publicationDate = '2010.10.10'
        }
    }

    public get postContent(){
        return console.log(this._authorName,'\n',this._title,'\n',this._text);
    }

}

let FirstPost = new blogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04');
let SecondPost = new blogPost('Tim Urban', 'Whait but why?', 'A popular lont-form, stick-figure-illustrated blog about almost everything.');
let ThirdPost = new blogPost('William Turton', 'One Engineer is trying to ge IBM to Reckon With Trump', tooLongText, '2017.03.28');

FirstPost.postContent;
SecondPost.postContent;
ThirdPost.postContent;