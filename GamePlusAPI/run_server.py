#Liberias
from flask import Flask, request, make_response, jsonify
#Liberia SQL
import mysql.connector
from mysql.connector import errorcode
#Clases Importadas
from clientes import Clientes
from empleados import Empleados
from estados import Estados
from sucursales import Sucursales
from municipios import Municipios
from productos import Productos
#Conexion a base de datos.
try:
        connection = mysql.connector.connect(user = 'Prog_Infante', password = 'pInfante', database = 'gameplus')
        cursor = connection.cursor()
#Manejo de Errores SQL
except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Algo salio mal con tu usuario o contraseña, verifica los datos")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
                print("La base de datos no existe")
        else:
                print("Algo salio mal: {}".format(err))
#Rutas Flask
app = Flask(__name__)
#Login
@app.route("/login/", methods = ['POST'])
def login():
        if request.method == 'POST':
                #Recuperacion de datos en formato Json de Ionic
                getData = request.get_json()
                correo_electronico = getData['correoe']
                contrasena = getData['contrasena']
                token = getData['token']
                #Verificacion Cliente
                if token == "c0101c":
                        #Envio de Conexion y Datos a tabla Clientes
                        userDB = Clientes(connection, cursor)
                        response = make_response(str(userDB.ingresar(correo_electronico, contrasena)))
                        #Header HTML
                        response.headers.add('Access-Control-Allow-Origin', '*')
                        #Retorno de respuesta a Ionic
                        return response
                #Verificacion Empleado
                elif token == "e0202e":
                        #Envio de Conexion y Datos a tabla Empleados
                        userDB = Empleados(connection, cursor)
                        response =  make_response(str(userDB.ingresar(correo_electronico, contrasena)))
                        #Header HTML
                        response.headers.add('Access-Control-Allow-Origin', '*')
                        #Retorno de respuesta a Ionic
                        return response

#Clientes
@app.route("/clientes/registro/", methods = ['POST'])
def clientes_registro():
        if request.method == 'POST':
                #Recuperacion de datos en formato Json de Ionic
                getData = request.get_json()
                nombre = getData['nombre']
                apellido_paterno = getData['apellidop']
                apellido_materno = getData['apellidom']
                correo_electronico = getData['correoe']
                contrasena = getData['contrasena']
                telefono = getData['telefono']
                rfc = getData['rfc']
                nivel_usuario = getData['nivel_usuario']
                id_estado = getData['id_estado']
                #Envio de conexion y Datos a tabla clientes
                userDB = Clientes(connection, cursor)
                response = make_response(str(userDB.crear(nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, telefono, rfc, nivel_usuario, id_estado)))
                #Header HTML
                response.headers.add('Access-Control-Allow-Origin', '*')
                #Retorno de respuesta a Ionic
                return response

@app.route("/cliente/<correo_cliente>", methods= ['POST', 'GET', 'DELETE'])
def clientes(correo_cliente):
        #Modificacion de Empleado
        if request.method == 'POST':
                return "True"
        #Recuperacion de Empleado
        elif request.method == 'GET':
                return "True"
        #Eliminacion de Empleado
        elif request.method == 'DELETE':
                return "True"

@app.route("/cliente/", methods = ['GET'])
def clientes_listas():
        if request.method == 'GET':
                #Envio de conexion y Peticion de Datos
                userDB = Clientes(connection, cursor)
                response = userDB.obtener()
                #Retorno respuesta a Ionic
                return jsonify(response)

#Empleados
@app.route("/empleados/registro/", methods = ['POST'])
def empleados_registro():
        if request.method == 'POST':
                #Recuperacion de datos en formato Json de Ionic
                getData = request.get_json()
                nombre = getData['nombre']
                apellido_paterno = getData['apellidop']
                apellido_materno = getData['apellidom']
                correo_electronico = getData['correoe']
                contrasena = getData['contrasena']
                nivel_usuario = getData['nivel_usuario']
                id_sucursal = getData['id_sucursal']
                #Envio de conexion y Datos a tabla Empleados
                userDB = Empleados(connection, cursor)
                response = make_response(str(userDB.crear(nombre, apellido_paterno, apellido_materno, correo_electronico, contrasena, nivel_usuario, id_sucursal)))
                #Header HTML
                response.headers.add('Access-Control-Allow-Origin', '*')
                #Retorno de respuesta a Ionic
                return response

@app.route("/empleado/<correo_empleado>", methods= ['POST', 'GET', 'DELETE'])
def empleados(correo_empleado):
        #Modificacion de Empleado
        if request.method == 'POST':
                return "True"
        #Recuperacion de Empleado
        elif request.method == 'GET':
                userDB = Empleados(connection, cursor)
                response = userDB.recuperar(correo_empleado)
                #Retorno respuesta a Ionic
                return jsonify(response)
        #Eliminacion de Empleado
        elif request.method == 'DELETE':
                return "True"

@app.route("/empleado/", methods = ['GET'])
def empleados_listas():
        if request.method == 'GET':
                #Envio de conexion y Peticion de Datos
                userDB = Empleados(connection, cursor)
                response = userDB.obtener()
                #Retorno respuesta a Ionic
                return jsonify(response)

#Estados
@app.route("/estados/", methods = ['GET'])
def estados():
        #Envio de conexion y peticion de datos.
        userDB = Estados(connection, cursor)
        response = userDB.obtener()
        #Retorno de respuesta a Ionic
        return jsonify(response)

@app.route("/estados/<id_estado>", methods= ['POST', 'GET', 'DELETE'])
def estados_info(id_estado):
        #Modificacion de Estado
        if request.method == 'POST':
                return "True"
        #Recuperacion de Sucursal
        elif request.method == 'GET':
                #Envio de conexion y peticion de datos.
                userDB = Estados(connection, cursor)
                response = userDB.recuperar(id_estado)
                #Retorno de respuesta a Ionic
                return jsonify(response)
        #Eliminacion de Sucursal
        elif request.method == 'DELETE':
                return "True"

#Prodcutos
@app.route("/producto/registro/", methods = ['POST'])
def productos_registro():
        if request.method == 'POST':
                #Recuperacion de datos en formato Json de Ionic
                getData = request.get_json()
                nombre = getData['nombre']
                precio = getData['precio']
                fecha_lanzamiento = getData['fecha_lanzamiento']
                marca = getData['marca']
                #Envio de conexion y datos a tabla productos
                userDB = Productos(connection, cursor)
                response = make_response(str(userDB.crear(nombre, precio, fecha_lanzamiento, marca)))
                #Header HTML
                response.headers.add('Access-Control-Allow-Origin', '*')
                #Retorno de respuesta a Ionic
                return response

@app.route("/producto/", methods = ['GET'])
def productos_lista():
        if request.method == 'GET':
                #Envio de conexion y Peticion de Datos
                userDB = Productos(connection, cursor)
                response = userDB.obtener()
                #Retorno respuesta a Ionic
                return jsonify(response)

#Sucursales
@app.route("/sucursal/registro/", methods = ['POST'])
def sucursales_registro():
        if request.method == 'POST':
                #Recuperacion de datos en formato Json de Ionic
                getData = request.get_json()
                ubicacion = getData['ubicacion']
                codigo_postal = getData['codigo_postal']
                id_estado = getData['id_estado']
                id_municipio = getData['id_municipio']
                horario_inicio = getData['horario_inicio']
                horario_cierre = getData['horario_cierre']
                #Envio de conexion y Datos a tabla Sucursales
                userDB = Sucursales(connection, cursor)
                response = make_response(str(userDB.crear(ubicacion, codigo_postal, id_estado, id_municipio, horario_inicio, horario_cierre)))
                #Header HTML
                response.headers.add('Access-Control-Allow-Origin', '*')
                #Retorno de respuesta a Ionic
                return response

@app.route("/sucursales/", methods= ['GET'])
def sucursales():
        #Envio de conexion y peticion de datos.
        userDB = Sucursales(connection, cursor)
        response = userDB.obtener()
        #Retorno de respuesta a Ionic
        return jsonify(response)

@app.route("/sucursales/<id_sucursal>", methods= ['POST', 'GET', 'DELETE'])
def secursal_id(id_sucursal):
        #Modificacion de Sucursal
        if request.method == 'POST':
                return "True"
        #Recuperacion de Sucursal
        elif request.method == 'GET':
                #Envio de conexion y peticion de datos.
                userDB = Sucursales(connection, cursor)
                response = userDB.recuperar(id_sucursal)
                #Retorno de respuesta a Ionic
                return jsonify(response)
        #Eliminacion de Sucursal
        elif request.method == 'DELETE':
                return "True"

#Municipios
@app.route("/municios/<id_estado>", methods = ['GET'])
def municios(id_estado):
        #Envio de conexion y peticion de datos.
        userDB = Municipios(connection, cursor)
        response = userDB.obtener(id_estado)
        #Retorno de respuesta a Ionic
        return jsonify(response)

@app.route("/municios/get/<id_municipio>", methods = ['GET'])
def municios_get(id_municipio):
        #Envio de conexion y peticion de datos.
        userDB = Municipios(connection, cursor)
        response = userDB.recuperar(id_municipio)
        #Retorno de respuesta a Ionic
        return jsonify(response)

#Debug en tiempo real.
app.run(debug=True)