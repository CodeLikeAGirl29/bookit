(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,o,t){e.exports=t(21)},,,,,,function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){"use strict";t.r(o);var i=t(0),n=t.n(i),s=t(7),a=t.n(s),r=(t(14),t(1)),l=t(2),c=t(4),d=t(3),u=t(5);t(15),t(16);function h(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header_title"},"Bookit"),n.a.createElement("h2",{className:"header_subtitle"},"Books, Meet Google"))}t(17);var g=function(e){function o(){var e,t;Object(r.a)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(d.a)(o)).call.apply(e,[this].concat(n)))).state={searchInput:""},t.handleSearchInput=function(e){t.setState({searchInput:e.target.value})},t}return Object(u.a)(o,e),Object(l.a)(o,[{key:"render",value:function(){var e=this.props.handleSearchSubmit,o=this.state.searchInput;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"searchbar_container"},n.a.createElement("form",{className:"searchbar_form",onSubmit:function(t){return e(t,o)}},n.a.createElement("input",{className:"searchbar_input",type:"text",placeholder:"Search Books ... ",name:"search",onChange:this.handleSearchInput}),n.a.createElement("button",{type:"submit"},n.a.createElement("i",{className:"fa fa-search search_button"})))))}}]),o}(i.Component);t(18),t(19);function p(e){var o,t,i,s,a,r,l=e.book;return l.volumeInfo?(o=void 0!==l.volumeInfo.authors?l.volumeInfo.authors[0]:"No authors listed",t=void 0!==l.volumeInfo.title?l.volumeInfo.title:"No authors listed",i=void 0!==l.volumeInfo.imageLinks.thumbnail?l.volumeInfo.imageLinks.thumbnail:"https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",s=void 0!==l.volumeInfo.previewLink?l.volumeInfo.previewLink:"https://books.google.com/"):(o=null,t=null,i=null,s=null,a=null,r=null),a=l.searchInfo&&void 0!==l.searchInfo.textSnippet?l.searchInfo.textSnippet:null,r=l.saleInfo&&"FOR_SALE"===l.saleInfo.saleability?"$"+l.saleInfo.listPrice.amount:null,n.a.createElement("div",{className:"book_container"},n.a.createElement("a",{href:s,target:"blank"},n.a.createElement("li",{className:"book_li"},n.a.createElement("img",{src:i,className:"book_image",alt:"The cover of the book titled ".concat(t)}),n.a.createElement("div",{className:"book_info"},n.a.createElement("h2",{className:"book_title"},t),n.a.createElement("h4",{className:"book_author"},o),n.a.createElement("div",{className:"book_cost"},r),n.a.createElement("p",{className:"book_snippet"},a)))))}function m(e){var o=e.bookResults.items.map(function(e,o){return n.a.createElement(p,{book:e,key:o})});return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"booklist_container"},n.a.createElement("ul",null,o)))}t(20);function b(e){var o=e.handlePrintType,t=e.handleBookType;return n.a.createElement("div",{className:"filter_bar_container"},n.a.createElement("label",null,"Print Type:"),n.a.createElement("form",{action:"",className:"print_type_filter_form",onChange:function(e){return o(e.target.value)}},n.a.createElement("select",{name:"print-type-filter"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"books"},"Only Books"),n.a.createElement("option",{value:"magazines"},"Only Magazines"))),n.a.createElement("label",null,"Book Type:"),n.a.createElement("form",{action:"",className:"book_type_filter_form",onChange:function(e){return t(e.target.value)}},n.a.createElement("select",{name:"book-type-filter"},n.a.createElement("option",{value:"ebooks"},"All eBooks"),n.a.createElement("option",{value:"free-ebooks"},"Free eBooks"),n.a.createElement("option",{value:"paid-ebooks"},"Paid eBooks"),n.a.createElement("option",{value:"full"},"Fully Available eBooks"),n.a.createElement("option",{value:"partial"},"Partially Available eBooks"))))}var f=function(e){function o(){var e,t;Object(r.a)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(d.a)(o)).call.apply(e,[this].concat(n)))).state={bookResults:t.props.starterBookResults,searchQuery:"lord+of+the+rings",bookFilter:"",printFilter:""},t.handleSearchSubmit=function(e,o){e.preventDefault(),t.setState({searchQuery:o});var i=t.formatQuery("https://www.googleapis.com/books/v1/volumes",o,"AIzaSyCQyLInHW1z1Ev9qqwwdG0MBqxdFcD542w");fetch(i).then(function(e){if(!e.ok)throw new Error("Something went wrong on the network. Please try again later.");return e}).then(function(e){return e.json()}).then(function(e){console.log("Good response From Google Books API: ",e),t.setState({bookResults:e,error:null})}).catch(function(e){t.setState({error:e.message})})},t.formatQuery=function(e,o,i){var n,s=t.state,a=s.bookFilter,r=s.printFilter;""!==o&&(n="?q="+o),""!==a&&(n=n+"&filter="+a),""!==r&&(n=n+"&bookType="+r);var l=e+n+"&key="+i;return console.log("formatted URL: ",l),l},t.handlePrintType=function(e){e&&t.setState({printFilter:e})},t.handleBookType=function(e){e&&t.setState({bookFilter:e})},t}return Object(u.a)(o,e),Object(l.a)(o,[{key:"render",value:function(){var e,o=this.state.bookResults;return e=window.innerWidth<=500?null:n.a.createElement(b,{handlePrintType:this.handlePrintType,handleBookType:this.handleBookType}),n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement(g,{handleSearchSubmit:this.handleSearchSubmit}),e,n.a.createElement(m,{bookResults:o}))}}]),o}(i.Component);a.a.render(n.a.createElement(f,{starterBookResults:{kind:"books#volumes",totalItems:1340,items:[{kind:"books#volume",id:"_FjrugAACAAJ",etag:"Mk9FWNqwQ0M",selfLink:"https://www.googleapis.com/books/v1/volumes/_FjrugAACAAJ",volumeInfo:{title:"The Fellowship of the Ring",subtitle:"Being the First Part of the Lord of the Rings",authors:["John Ronald Reuel Tolkien"],publisher:"HarperCollins Publishers",publishedDate:"2012",description:'Continuing the story begun in The Hobbit, this is the first part of Tolkien s epic masterpiece, The Lord of the Rings, featuring an exclusive cover image from the film, the definitive text, and a detailed map of Middle-earth. Sauron, the Dark Lord, has gathered to him all the Rings of Power the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring the ring that rules them all which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. To celebrate the release of the first of Peter Jackson s two-part film adaptation of The Hobbit, THE HOBBIT: AN UNEXPECTED JOURNEY, this first part of The Lord of the Rings is available for a limited time with an exclusive cover image from Peter Jackson s award-winning trilogy."',industryIdentifiers:[{type:"ISBN_10",identifier:"0007488300"},{type:"ISBN_13",identifier:"9780007488308"}],readingModes:{text:!1,image:!1},pageCount:531,printType:"BOOK",categories:["Baggins, Frodo (Fictitious character)"],averageRating:4,ratingsCount:2401,maturityRating:"NOT_MATURE",allowAnonLogging:!1,contentVersion:"preview-1.0.0",imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=_FjrugAACAAJ&dq=Lord+of+the+Rings&hl=&cd=1&source=gbs_api",infoLink:"http://books.google.com/books?id=_FjrugAACAAJ&dq=Lord+of+the+Rings&hl=&source=gbs_api",canonicalVolumeLink:"https://books.google.com/books/about/The_Fellowship_of_the_Ring.html?hl=&id=_FjrugAACAAJ"},saleInfo:{country:"US",saleability:"NOT_FOR_SALE",isEbook:!1},accessInfo:{country:"US",viewability:"NO_PAGES",embeddable:!1,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!1},pdf:{isAvailable:!1},webReaderLink:"http://play.google.com/books/reader?id=_FjrugAACAAJ&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"NONE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"The Lord of the Rings is an epic adventure, a beautifully written masterpiece of imaginative fiction of the 20th century."}},{kind:"books#volume",id:"yl4dILkcqm4C",etag:"l7V382lvgco",selfLink:"https://www.googleapis.com/books/v1/volumes/yl4dILkcqm4C",volumeInfo:{title:"The Lord of the Rings",subtitle:"One Volume",authors:["J.R.R. Tolkien"],publisher:"Houghton Mifflin Harcourt",publishedDate:"2012-02-15",description:"A PBS Great American Read Top 100 Pick One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider. This new edition includes the fiftieth-anniversary fully corrected text setting and, for the first time, an extensive new index. J.R.R. Tolkien (1892-1973), beloved throughout the world as the creator of The Hobbit, The Lord of the Rings, and The Silmarillion, was a professor of Anglo-Saxon at Oxford, a fellow of Pembroke College, and a fellow of Merton College until his retirement in 1959. His chief interest was the linguistic aspects of the early English written tradition, but while he studied classic works of the past, he was creating a set of his own.",industryIdentifiers:[{type:"ISBN_13",identifier:"9780547951942"},{type:"ISBN_10",identifier:"0547951949"}],readingModes:{text:!0,image:!0},pageCount:1216,printType:"BOOK",categories:["Fiction"],averageRating:4.5,ratingsCount:57,maturityRating:"NOT_MATURE",allowAnonLogging:!0,contentVersion:"1.15.15.0.preview.3",panelizationSummary:{containsEpubBubbles:!1,containsImageBubbles:!1},imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=yl4dILkcqm4C&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=2&source=gbs_api",infoLink:"https://play.google.com/store/books/details?id=yl4dILkcqm4C&source=gbs_api",canonicalVolumeLink:"https://market.android.com/details?id=book-yl4dILkcqm4C"},saleInfo:{country:"US",saleability:"FOR_SALE",isEbook:!0,listPrice:{amount:16.99,currencyCode:"USD"},retailPrice:{amount:16.99,currencyCode:"USD"},buyLink:"https://play.google.com/store/books/details?id=yl4dILkcqm4C&rdid=book-yl4dILkcqm4C&rdot=1&source=gbs_api",offers:[{finskyOfferType:1,listPrice:{amountInMicros:1699e4,currencyCode:"USD"},retailPrice:{amountInMicros:1699e4,currencyCode:"USD"},giftable:!0}]},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/The_Lord_of_the_Rings-sample-epub.acsm?id=yl4dILkcqm4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},pdf:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/The_Lord_of_the_Rings-sample-pdf.acsm?id=yl4dILkcqm4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},webReaderLink:"http://play.google.com/books/reader?id=yl4dILkcqm4C&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"This new edition includes the fiftieth-anniversary fully corrected text setting and, for the first time, an extensive new index."}},{kind:"books#volume",id:"jNjKrXRP0G8C",etag:"yELYMxmNn5A",selfLink:"https://www.googleapis.com/books/v1/volumes/jNjKrXRP0G8C",volumeInfo:{title:"Picturing Tolkien",subtitle:"Essays on Peter Jackson\u2019s The Lord of the Rings Film Trilogy",authors:["Janice M. Bogstad","Philip E. Kaveny"],publisher:"McFarland",publishedDate:"2011-09-07",description:"This group of new critical essays offers multidisciplinary analysis of director Peter Jackson\u2019s spectacularly successful adaptations of J.R.R. Tolkien\u2019s Lord of the Rings trilogy: The Fellowship of the Ring (2001), The Two Towers (2002) and The Return of the King (2003). Part One of the collection, \u201cTechniques of Structure and Story,\u201d compares and contrasts the organizational principles of the books and films. Part Two, \u201cTechniques of Character and Culture,\u201d focuses on the methods used to transform the characters and settings of Tolkien\u2019s narrative into the personalities and places visualized on screen. Each of the sixteen essays includes extensive notes and a separate bibliography. Instructors considering this book for use in a course may request an examination copy here.",industryIdentifiers:[{type:"ISBN_13",identifier:"9780786484737"},{type:"ISBN_10",identifier:"078648473X"}],readingModes:{text:!1,image:!0},pageCount:309,printType:"BOOK",categories:["Performing Arts"],maturityRating:"NOT_MATURE",allowAnonLogging:!0,contentVersion:"preview-1.0.0",panelizationSummary:{containsEpubBubbles:!1,containsImageBubbles:!1},imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=jNjKrXRP0G8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=jNjKrXRP0G8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=jNjKrXRP0G8C&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=3&source=gbs_api",infoLink:"https://play.google.com/store/books/details?id=jNjKrXRP0G8C&source=gbs_api",canonicalVolumeLink:"https://market.android.com/details?id=book-jNjKrXRP0G8C"},saleInfo:{country:"US",saleability:"FOR_SALE",isEbook:!0,listPrice:{amount:15.99,currencyCode:"USD"},retailPrice:{amount:9.99,currencyCode:"USD"},buyLink:"https://play.google.com/store/books/details?id=jNjKrXRP0G8C&rdid=book-jNjKrXRP0G8C&rdot=1&source=gbs_api",offers:[{finskyOfferType:1,listPrice:{amountInMicros:1599e4,currencyCode:"USD"},retailPrice:{amountInMicros:999e4,currencyCode:"USD"},giftable:!0}]},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!1},pdf:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/Picturing_Tolkien-sample-pdf.acsm?id=jNjKrXRP0G8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},webReaderLink:"http://play.google.com/books/reader?id=jNjKrXRP0G8C&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"Each of the sixteen essays includes extensive notes and a separate bibliography. Instructors considering this book for use in a course may request an examination copy here."}},{kind:"books#volume",id:"I8mxughWAOEC",etag:"6du/Eg9ri3E",selfLink:"https://www.googleapis.com/books/v1/volumes/I8mxughWAOEC",volumeInfo:{title:"The Lord of the Rings",subtitle:"Popular Culture in Global Context",authors:["Ernest Mathijs"],publisher:"Wallflower Press",publishedDate:"2006",description:"Bringing together leading scholars in the fields of media and film studies to explore the various strategies and implications underlying the global presence of 'Lord of the Rings', this book covers different national contexts and presents a lively and diverse combination of textual, historical and empirical study.",industryIdentifiers:[{type:"ISBN_10",identifier:"1904764827"},{type:"ISBN_13",identifier:"9781904764823"}],readingModes:{text:!1,image:!0},pageCount:341,printType:"BOOK",categories:["Performing Arts"],averageRating:5,ratingsCount:1,maturityRating:"NOT_MATURE",allowAnonLogging:!1,contentVersion:"1.1.1.0.preview.1",imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=I8mxughWAOEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=I8mxughWAOEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=I8mxughWAOEC&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=4&source=gbs_api",infoLink:"http://books.google.com/books?id=I8mxughWAOEC&dq=Lord+of+the+Rings&hl=&source=gbs_api",canonicalVolumeLink:"https://books.google.com/books/about/The_Lord_of_the_Rings.html?hl=&id=I8mxughWAOEC"},saleInfo:{country:"US",saleability:"NOT_FOR_SALE",isEbook:!1},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!1},pdf:{isAvailable:!1},webReaderLink:"http://play.google.com/books/reader?id=I8mxughWAOEC&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"Bringing together leading scholars in the fields of media and film studies to explore the various strategies and implications underlying the global presence of &#39;Lord of the Rings&#39;, this book covers different national contexts and presents a ..."}},{kind:"books#volume",id:"geAU_jMC7UUC",etag:"PkRjMJ0cNO4",selfLink:"https://www.googleapis.com/books/v1/volumes/geAU_jMC7UUC",volumeInfo:{title:"The Lord of the Rings",authors:["J. R. R. Tolkien"],publisher:"Houghton Mifflin Harcourt",publishedDate:"2003",description:"Presents the epic depicting the Great War of the Ring, a struggle between good and evil in Middle Earth.",industryIdentifiers:[{type:"ISBN_10",identifier:"0618343997"},{type:"ISBN_13",identifier:"9780618343997"}],readingModes:{text:!1,image:!1},pageCount:1137,printType:"BOOK",categories:["Fiction"],averageRating:4.5,ratingsCount:328,maturityRating:"NOT_MATURE",allowAnonLogging:!1,contentVersion:"0.0.1.0.preview.0",imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=geAU_jMC7UUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=geAU_jMC7UUC&printsec=frontcover&img=1&zoom=1&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=geAU_jMC7UUC&dq=Lord+of+the+Rings&hl=&cd=5&source=gbs_api",infoLink:"http://books.google.com/books?id=geAU_jMC7UUC&dq=Lord+of+the+Rings&hl=&source=gbs_api",canonicalVolumeLink:"https://books.google.com/books/about/The_Lord_of_the_Rings.html?hl=&id=geAU_jMC7UUC"},saleInfo:{country:"US",saleability:"NOT_FOR_SALE",isEbook:!1},accessInfo:{country:"US",viewability:"NO_PAGES",embeddable:!1,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!1},pdf:{isAvailable:!1},webReaderLink:"http://play.google.com/books/reader?id=geAU_jMC7UUC&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"NONE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"Presents the epic depicting the Great War of the Ring, a struggle between good and evil in Middle Earth."}},{kind:"books#volume",id:"5XOL49zCAHEC",etag:"xT7GFQNlFOo",selfLink:"https://www.googleapis.com/books/v1/volumes/5XOL49zCAHEC",volumeInfo:{title:"Watching the Lord of the Rings",subtitle:"Tolkien's World Audiences",authors:["Martin Barker","Ernest Mathijs"],publisher:"Peter Lang",publishedDate:"2008",description:'How did audiences across the world respond to the films of "The Lord of the Rings"? This book presents findings from the largest film audience project ever undertaken, drawing from 25,000 questionnaire responses and a wide array of other materials. Contributors use these materials to explore a series of widely speculated questions: why is film fantasy important to different kinds of viewers? Through marketing, previews and reviews, debates and cultural chatter, how are audiences prepared for a film like this? How did fans of the book respond to its adaptation on screen? How do people choose their favorite characters? How was the films\' reception shaped by different national and cultural contexts? The answers to these questions shed fresh light on the extraordinary popularity of "The Lord of the Rings" and provide important new insights into the global reception of cinema in the twenty-first century.',industryIdentifiers:[{type:"ISBN_10",identifier:"0820463965"},{type:"ISBN_13",identifier:"9780820463964"}],readingModes:{text:!1,image:!0},pageCount:297,printType:"BOOK",categories:["Performing Arts"],maturityRating:"NOT_MATURE",allowAnonLogging:!1,contentVersion:"0.0.1.0.preview.1",imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=5XOL49zCAHEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=5XOL49zCAHEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=5XOL49zCAHEC&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=6&source=gbs_api",infoLink:"http://books.google.com/books?id=5XOL49zCAHEC&dq=Lord+of+the+Rings&hl=&source=gbs_api",canonicalVolumeLink:"https://books.google.com/books/about/Watching_the_Lord_of_the_Rings.html?hl=&id=5XOL49zCAHEC"},saleInfo:{country:"US",saleability:"NOT_FOR_SALE",isEbook:!1},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!1},pdf:{isAvailable:!1},webReaderLink:"http://play.google.com/books/reader?id=5XOL49zCAHEC&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"This book presents findings from the largest film audience project ever undertaken, drawing from 25,000 questionnaire responses and a wide array of other materials."}},{kind:"books#volume",id:"28kHBc0mk7UC",etag:"TBOFhyRwXVE",selfLink:"https://www.googleapis.com/books/v1/volumes/28kHBc0mk7UC",volumeInfo:{title:"Unsung Heroes of the Lord of the Rings",subtitle:"From the Page to the Screen",authors:["Lynnette R. Porter"],publisher:"Greenwood Publishing Group",publishedDate:"2005",description:"Celebrates the unsung heroes in the Lord of the Rings books and movies.",industryIdentifiers:[{type:"ISBN_10",identifier:"0275985210"},{type:"ISBN_13",identifier:"9780275985219"}],readingModes:{text:!0,image:!0},pageCount:224,printType:"BOOK",categories:["History"],maturityRating:"NOT_MATURE",allowAnonLogging:!1,contentVersion:"0.1.2.0.preview.3",panelizationSummary:{containsEpubBubbles:!1,containsImageBubbles:!1},imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=28kHBc0mk7UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=28kHBc0mk7UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=28kHBc0mk7UC&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=7&source=gbs_api",infoLink:"https://play.google.com/store/books/details?id=28kHBc0mk7UC&source=gbs_api",canonicalVolumeLink:"https://market.android.com/details?id=book-28kHBc0mk7UC"},saleInfo:{country:"US",saleability:"FOR_SALE",isEbook:!0,listPrice:{amount:41.95,currencyCode:"USD"},retailPrice:{amount:31.88,currencyCode:"USD"},buyLink:"https://play.google.com/store/books/details?id=28kHBc0mk7UC&rdid=book-28kHBc0mk7UC&rdot=1&source=gbs_api",offers:[{finskyOfferType:1,listPrice:{amountInMicros:4195e4,currencyCode:"USD"},retailPrice:{amountInMicros:3188e4,currencyCode:"USD"},giftable:!0}]},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/Unsung_Heroes_of_the_Lord_of_the_Rings-sample-epub.acsm?id=28kHBc0mk7UC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},pdf:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/Unsung_Heroes_of_the_Lord_of_the_Rings-sample-pdf.acsm?id=28kHBc0mk7UC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},webReaderLink:"http://play.google.com/books/reader?id=28kHBc0mk7UC&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"Celebrates the unsung heroes in the Lord of the Rings books and movies."}},{kind:"books#volume",id:"aWZzLPhY4o0C",etag:"ZX3jBnr/S4Y",selfLink:"https://www.googleapis.com/books/v1/volumes/aWZzLPhY4o0C",volumeInfo:{title:"The Fellowship of the Ring",subtitle:"Being the First Part of The Lord of the Rings",authors:["J.R.R. Tolkien"],publisher:"Houghton Mifflin Harcourt",publishedDate:"2012-02-15",description:"The first volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. \u201cA unique, wholly realized other world, evoked from deep in the well of Time, massively detailed, absorbingly entertaining, profound in meaning.\u201d \u2013 New York Times",industryIdentifiers:[{type:"ISBN_13",identifier:"9780547952017"},{type:"ISBN_10",identifier:"0547952015"}],readingModes:{text:!0,image:!0},pageCount:432,printType:"BOOK",categories:["Fiction"],averageRating:4.5,ratingsCount:82,maturityRating:"NOT_MATURE",allowAnonLogging:!0,contentVersion:"3.22.21.0.preview.3",panelizationSummary:{containsEpubBubbles:!1,containsImageBubbles:!1},imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=aWZzLPhY4o0C&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=8&source=gbs_api",infoLink:"https://play.google.com/store/books/details?id=aWZzLPhY4o0C&source=gbs_api",canonicalVolumeLink:"https://market.android.com/details?id=book-aWZzLPhY4o0C"},saleInfo:{country:"US",saleability:"FOR_SALE",isEbook:!0,listPrice:{amount:9.99,currencyCode:"USD"},retailPrice:{amount:9.99,currencyCode:"USD"},buyLink:"https://play.google.com/store/books/details?id=aWZzLPhY4o0C&rdid=book-aWZzLPhY4o0C&rdot=1&source=gbs_api",offers:[{finskyOfferType:1,listPrice:{amountInMicros:999e4,currencyCode:"USD"},retailPrice:{amountInMicros:999e4,currencyCode:"USD"},giftable:!0}]},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/The_Fellowship_of_the_Ring-sample-epub.acsm?id=aWZzLPhY4o0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},pdf:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/The_Fellowship_of_the_Ring-sample-pdf.acsm?id=aWZzLPhY4o0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},webReaderLink:"http://play.google.com/books/reader?id=aWZzLPhY4o0C&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"The first volume in J.R.R. Tolkien&#39;s epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the ..."}},{kind:"books#volume",id:"TvsF3vxvEswC",etag:"TeQ/cjHwtjw",selfLink:"https://www.googleapis.com/books/v1/volumes/TvsF3vxvEswC",volumeInfo:{title:"From Hobbits to Hollywood",subtitle:"Essays on Peter Jackson's Lord of the Rings",authors:["Ernest Mathijs","Murray Pomerance"],publisher:"Rodopi",publishedDate:"2006-01-01",description:"Peter Jackson's film version of The Lord of the Rings (2001-2003) is the grandest achievement of 21st century cinema so far. But it is also linked to topical and social concerns including war, terrorism, and cultural imperialism. Its style, symbols, narrative, and structure seem always already linked to politics, cultural definition, problems of cinematic style, and the elemenal mythologies that most profoundly capture our imaginations.From Hobbits to Hollywood: Essays on Peter Jackson's Lord of the Rings treats Jackson's trilogy as having two conditions of existence: an aesthetic and a political. Like other cultural artefacts, it leads a double life asobjet d'art and public statement about the world, so that nothing in it is ever just cinematically beautiful or tasteful, and nothing is ever just a message or an opinion.Written by leading scholars in the study of cinema and cultureFrom Hobbits to Hollywood gives Jackson's trilogy the fullest scholarly interrogation to date. Ranging from interpretations ofThe Lord of the Rings' ideological and philosophical implications, through discussions of its changing fandoms and its incorporation into the Hollywood industry of stars, technology, genre, and merchandising, to considerations of CGI effects, acting, architecture and style, the essays contained here open a new vista of criticism and light, for ardent fans of J.R.R. Tolkien, followers of Jackson, and all those who yearn for a deeper appreciation of cinema and its relation to culture.",industryIdentifiers:[{type:"ISBN_13",identifier:"9789042016828"},{type:"ISBN_10",identifier:"9042016825"}],readingModes:{text:!0,image:!0},pageCount:403,printType:"BOOK",categories:["Social Science"],maturityRating:"NOT_MATURE",allowAnonLogging:!1,contentVersion:"0.0.3.0.preview.3",panelizationSummary:{containsEpubBubbles:!1,containsImageBubbles:!1},imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=TvsF3vxvEswC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=TvsF3vxvEswC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=TvsF3vxvEswC&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=9&source=gbs_api",infoLink:"https://play.google.com/store/books/details?id=TvsF3vxvEswC&source=gbs_api",canonicalVolumeLink:"https://market.android.com/details?id=book-TvsF3vxvEswC"},saleInfo:{country:"US",saleability:"FOR_SALE",isEbook:!0,listPrice:{amount:85.7,currencyCode:"USD"},retailPrice:{amount:68.56,currencyCode:"USD"},buyLink:"https://play.google.com/store/books/details?id=TvsF3vxvEswC&rdid=book-TvsF3vxvEswC&rdot=1&source=gbs_api",offers:[{finskyOfferType:1,listPrice:{amountInMicros:857e5,currencyCode:"USD"},retailPrice:{amountInMicros:6856e4,currencyCode:"USD"},giftable:!0}]},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/From_Hobbits_to_Hollywood-sample-epub.acsm?id=TvsF3vxvEswC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},pdf:{isAvailable:!0,acsTokenLink:"http://books.google.com/books/download/From_Hobbits_to_Hollywood-sample-pdf.acsm?id=TvsF3vxvEswC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"},webReaderLink:"http://play.google.com/books/reader?id=TvsF3vxvEswC&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"Ranging from interpretations of The Lord of the Rings&#39; ideological and philosophical implications, through discussions of its changing fandoms and its incorporation into the Hollywood industry of stars, technology, genre, and merchandising, ..."}},{kind:"books#volume",id:"v0nCCGkUqjUC",etag:"zUq8NHLMDbk",selfLink:"https://www.googleapis.com/books/v1/volumes/v0nCCGkUqjUC",volumeInfo:{title:"Celebrating Middle-Earth",subtitle:"The Lord of the Rings as a Defense of Western Civilization",authors:["John G. West"],publisher:"Inkling Books",publishedDate:"2002",description:'"An examination of the writings of J.R.R. Tolkien as a defense of the literary, philosophical, political, and religious foundations of Western society"--Half t.p.',industryIdentifiers:[{type:"ISBN_10",identifier:"1587420120"},{type:"ISBN_13",identifier:"9781587420122"}],readingModes:{text:!1,image:!0},pageCount:107,printType:"BOOK",categories:["Literary Criticism"],maturityRating:"NOT_MATURE",allowAnonLogging:!1,contentVersion:"0.0.1.0.preview.1",panelizationSummary:{containsEpubBubbles:!1,containsImageBubbles:!1},imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=v0nCCGkUqjUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",thumbnail:"http://books.google.com/books/content?id=v0nCCGkUqjUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},language:"en",previewLink:"http://books.google.com/books?id=v0nCCGkUqjUC&printsec=frontcover&dq=Lord+of+the+Rings&hl=&cd=10&source=gbs_api",infoLink:"http://books.google.com/books?id=v0nCCGkUqjUC&dq=Lord+of+the+Rings&hl=&source=gbs_api",canonicalVolumeLink:"https://books.google.com/books/about/Celebrating_Middle_Earth.html?hl=&id=v0nCCGkUqjUC"},saleInfo:{country:"US",saleability:"NOT_FOR_SALE",isEbook:!1},accessInfo:{country:"US",viewability:"PARTIAL",embeddable:!0,publicDomain:!1,textToSpeechPermission:"ALLOWED",epub:{isAvailable:!1},pdf:{isAvailable:!1},webReaderLink:"http://play.google.com/books/reader?id=v0nCCGkUqjUC&hl=&printsec=frontcover&source=gbs_api",accessViewStatus:"SAMPLE",quoteSharingAllowed:!1},searchInfo:{textSnippet:"&quot;An examination of the writings of J.R.R. Tolkien as a defense of the literary, philosophical, political, and religious foundations of Western society&quot;--Half t.p."}}]}}),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.127e23d2.chunk.js.map