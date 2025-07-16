const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const postsContainer = document.getElementById("posts-container")

const timeAgo = (isoTimestamp) => {
  const timeThen = new Date(isoTimestamp);
  const timeNow = new Date();

  let diffInMin = parseInt((timeNow - timeThen) / 1000 / 60)
  let diffInHours = parseInt((timeNow - timeThen) / 1000 / 60 / 60)
  let diffInDays = parseInt((timeNow - timeThen) / 1000 / 60 / 60 / 24)

  if (timeNow - timeThen < 60 * 60 * 1000) {
    return `${diffInMin}m ago`;
  } else if (timeNow - timeThen < 24 * 60 * 60 * 1000) {
    return `${diffInHours}h ago`;
  } else {
    return `${diffInDays}d ago`;
  }
}

const viewCount = (views) =>
  views >= 1000 ? `${Math.floor(views / 1000)}k` : views;

function forumCategory(id) {
    if(allCategories.hasOwnProperty(id)) {
        return `<a class='category ${allCategories[id].className}' href='${forumCategoryUrl}${allCategories[id].className}/${id}'>${allCategories[id].category}</a>`
    }
    return `<a class='category general' href='${forumCategoryUrl}general/${id}'>General</a>`
}

function avatars(postersArr, usersArr) {
    return postersArr.map(poster => {
        const user = usersArr.find(user => user.id === poster.user_id);
        if (user) {
            let template = user.avatar_template.replace("{size}", 30)
            if (template.charAt(0) == "/"){
                template = avatarUrl + template
            }
            return `<img src="${template}" alt="${user.name}'s avatar" />`
        }
        return ""
    }).join("")
}

function showLatestPosts(usersObj) {
    let users = usersObj.users
    let topicList = usersObj.topic_list.topics

    postsContainer.innerHTML = topicList.map(val => {
        const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = val
        return `
            <tr>
                <td>
                    <a class='post-title' href='${forumTopicUrl}${slug}/${id}'>${title}</a>
                    ${forumCategory(category_id)}
                </td>
                <td>
                  <div class='avatar-container'>${avatars(posters, users)}</div>
                </td>
                <td>${posts_count - 1}</td>
                <td>${viewCount(views)}</td>
                <td>${timeAgo(bumped_at)}</td>
            </tr>`
    }).join('')
}

async function fetchData() {
    fetch(forumLatest)
        .then((response) => response.json())
        .then((data) => showLatestPosts(data))
        .catch((err) => console.log(err))
}


const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err)
  }
}


fetchData()




// -------------------------------------------

/* file: script.js */

const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const postsContainer = document.getElementById('posts-container');

const timeAgo = (isoTimestamp) => {
  const isoToReadable = new Date(isoTimestamp);
  const now = new Date();

  if (now - isoToReadable < 60 * 60 * 1000) {
    return `${parseInt((now - isoToReadable) / 1000 / 60)}m ago`;
  } else if (now - isoToReadable < 24 * 60 * 60 * 1000) {
    return `${parseInt((now - isoToReadable) / 1000 / 60 / 60)}h ago`;
  } else {
    return `${parseInt((now - isoToReadable) / 1000 / 60 / 60 / 24)}d ago`;
  }
}

const viewCount = (views) =>
  views >= 1000 ? `${Math.floor(views / 1000)}k` : views;

const forumCategory = id => {
  if (allCategories.hasOwnProperty(id)) {
    return `<a class='category ${allCategories[id].className}' href='${forumCategoryUrl}${allCategories[id].className}/${id}'>${allCategories[id].category}</a>`
  } else {
    return `<a class='category general' href='${forumCategoryUrl}general/${id}'>General</a>`
  }
}

const avatars = (posters, users) => {
  return posters.map(poster => {
    const user = users.find(user => user.id === poster.user_id);

    if (!user) return '';
    const avatarPath = user.avatar_template.replace('{size}', 30);
    const userAvatarUrl = avatarPath.startsWith('/')
      ? `${avatarUrl}${avatarPath}`
      : avatarPath; 
    return `<img src='${userAvatarUrl}' alt='${user.name}'>`;
  }).join('');
};

const showLatestPosts = data => {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML =
    topics.map(item => {
      const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = item;
      return `<tr>
            <td>
              <a class='post-title' href='${forumTopicUrl}${slug}/${id}'>${title}</a>
              ${forumCategory(category_id)}
            </td>
            <td>
              <div class='avatar-container'>
                ${avatars(posters, users)}
              </div>
            </td>
            <td>
              ${posts_count - 1}
            </td>
            <td>
              ${viewCount(views)}
            </td>
            <td>
              ${timeAgo(bumped_at)}
            </td>
          </tr>`
    }).join('');
}

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err)
  }
}

fetchData();