Seashell.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    species: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'seashell'
  })