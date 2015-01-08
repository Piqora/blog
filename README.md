piqoraBlog-v1
=============
Piqora Blog Jekyll Instructions

Migration
How to integrate the blog into your existing GitHub Pages site.
Create a new Jekyll instance in a directory named /blog/, then pull in all files which can be first downloaded here: http://shapeshift.d.pr/1ekSz
Download a copy of your wp-content/uploads/ directory
Upload wp-content/uploads/ to the root directory of /blog/ (retain the directory structure)
Point your subdomain (blog.piqora.com) at the /blog/ directory


Posts

Add New:  	Duplicate any .markdown file in /_posts/ then rename the new file exactly like this: yyyy-mm-dd-post-title.markdown
Ex: 2012-08-27-mark-suster-is-not-into-cowboy-hats-and-influence-score-cant-be-one-size-fits-all.markdown

Edit: 		Open /_posts/0000-00-00-name-of-post.markdown

Delete:	Delete the name-of-post.markdown file that you want to delete


Here’s an example of what you would edit:
---
author: Margie Burton
comments: true
date: 2014-12-12 19:37:05+00:00
layout: post
slug: 5-quick-tips-for-holiday-pinning
title: 5 Quick Tips For Holiday Pinning
wordpress_id: 1835
image: /img/piqora_single_v3_header-img.jpg
categories:
- Pinterest Best Practices
topPost: true

---
POST CONTENT GOES HERE, DIRECTLY BELOW THE BOTTOM “---”


Jekyll uses Markdown
Posts are written in markdown format, it’s simple and much more user friendly than HTML. Take a look at some posts to get a feel for how markdown works. 

Jekyll uses kramdown specifically, you can learn more about the syntax here: http://kramdown.gettalong.org/quickref.html




Authors
Important note: only edit between the “---” and “---”

Add New:  	Duplicate an HTML file in /author/ then rename the new file            Author Name.html
Edit: 		Open /author/Author Name.html
Delete:	Delete the Author Name.html file that you want to delete

Example of what you would edit:
---
layout: author-dir
title:  Author - Sharad Verma
description:  Sharad Verma is the CEO and Founder of Piqora.  Prior to founding Piqora in 2012, Sharad was the General Manager of the online coupon company Bloomspot.com, and was the founder and CEO of a social travel startup. Sharad has served as director of product management at Yahoo!
author: Sharad Verma
author-desc: Sharad Verma is the CEO and Founder of Piqora.  Prior to founding Piqora in 2012, Sharad was the General Manager of the online coupon company Bloomspot.com, and was the founder and CEO of a social travel startup. Sharad has served as director of product management at Yahoo!
overview: true
authorLinkedin: https://www.linkedin.com/in/heysharad
authorTwitter: https://twitter.com/heysharad
---  



Categories
Important note: only edit between the “---” and “---”

Add New:  	Duplicate an HTML file in /category/ then rename the new file Category Name.html
Edit: 		Open /category/Category Name.html
Delete:	Delete the Category Name.html file that you want to delete

Example of what you would edit:
---
layout: default-dir
title: Pinterest
category: Pinterest
overview: true
---

