class Productos:
    def __init__(self, connection, cursor):
        self.connection = connection
        self.cursor = cursor
    
    #Clase para nuevo producto
    def crear(self, nombre, precio, fecha_lanzamiento, marca):
        #Declaracion de consulta SQL
        insert = ('INSERT INTO productos(nombre, precio, fecha_lanzamiento, marca) VALUES (%s,%s,%s,%s)')
        #Ejecusion de consulta SQL
        try:
            self.cursor.execute(insert, (nombre, precio, fecha_lanzamiento, marca))
            self.connection.commit()
            return True
        #Manejo de Errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return False

    def obtener(self):
        productos = []
        #Ejecucion de consulta SQL
        try:
            self.cursor.execute('SELECT * FROM productos')
            resultado = self.cursor.fetchall()
            #Conversion de datos a formato Json
            for x in resultado:
                producto = {
                    'nombre': x[0],
                    'precio': x[1],
                    'fecha_lanzamiento': x[2],
                    'marca': x[3]
                }
                productos.append(producto)
            return productos
        #Manejo de errores
        except Exception as e:
            print("Algo salio mal: {}".format(e))
            return clientes
