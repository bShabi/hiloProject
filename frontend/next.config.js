module.exports = {
    future: {
        webpack5: true,
    },
    images: {
        domains: ['res.cloudinary.com']
    },

    buildModules: [
        '@nuxtjs/google-fonts',
    ],

    googleFonts: {
        families: {
            Inter: [300, 500, 700],
        }
    }
  
}



