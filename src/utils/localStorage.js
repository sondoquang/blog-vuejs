

export const storage = {
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key){
        localStorage.removeItem(key);
    }
}

if (!storage.get('posts')) {
    const posts = [ 
        {
            id:1,
            title: 'The Most Advance Business Plan',
            image: 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg',
            category: 'Entertainment',
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters, as opposed to using Content here, content here, making it look like readable English.",
            date: new Date().toLocaleDateString()
        },
        {
            id:2,
            title: 'WTCR from 2018: new rules, more cars, more races',
            image: 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg',
            category: 'Entertainment',
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem of letters, as opposed to using Content here, content here, making it look like readable English.",
            date: new Date().toLocaleDateString()
        },
        {
            id:3,
            title: 'The Most Advance Business PlanAll photographs are accurate. None of them is the truth',
            image: 'https://cdn.vjshop.vn/tin-tuc/cach-chup-anh-phong-canh/cach-chup-anh-phong-canh-dep-15.jpg',
            category: 'Entertainment',
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
            date: new Date().toLocaleDateString()
        },
        {
            id:4,
            title: 'The Most Advance Business PlanAll photographs are accurate. None of them is the truth',
            image: 'https://cdn.baohatinh.vn/images/cc10890815d28cf0413ff6eb5af44d1fc071b2285294e3ef2ea160519ba3dd5ddc07dbb777beac6a5cff766a6061d119/105d0093225t9704l2.jpg',
            category: 'Entertainment',
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
            date: new Date().toLocaleDateString()
        },
        {
            id:5,
            title: 'The Most Advance Business PlanAll photographs are accurate. None of them is the truth',
            image: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
            category: 'Entertainment',
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
            date: new Date().toLocaleDateString()
        }
    ]
    storage.set('posts', posts);
}

if (!storage.get('users')) {
    storage.set('users', []);
}