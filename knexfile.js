module.exports = {
    test:{
        client: 'pg',
        version: '9.6',
        connection:{
            host: 'localhost',
            user: 'postgres',
            password: '102030',
            database: 'financeiro',
        },
        migrations:{
            directory: 'src/migrations',
        },
    },
};