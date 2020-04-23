### HousyAPI_Lucky_DW15WDTPH


```
npm install sequelize
```

```
npm install --save-dev sequelize-cli nodemon
```

### Bootstraping

```
npx sequelize-cli init
```

### 1. Generate Models

```
npx sequelize-cli model:generate --name house --attributes name:string
```

### 2. Migrations Models

```
npx sequelize-cli db:migrate
```

### 3. Generate Seeders

```
npx sequelize-cli seed:generate --name demo-house
```

### 4. Seed All

```
npx sequelize-cli db:seed:all
```

### 5. Undo Migrate
```
npx sequelize-cli db:migrate:undo:all
```