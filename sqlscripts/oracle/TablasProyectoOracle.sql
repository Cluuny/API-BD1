CREATE TABLE Ventas (
    id_venta INTEGER,
    id_persona INTEGER,
    tipo_metodo_pago VARCHAR2(255),
    valor_total FLOAT,
    fecha_hora_venta TIMESTAMP,
    estado_venta NUMBER(1)
);

CREATE TABLE Productos_Ventas (
    codigo_producto INTEGER,
    id_venta INTEGER,
    valor_venta FLOAT,
    cantidad_producto INTEGER
);

CREATE TABLE Productos (
    codigo_producto INTEGER,
    id_persona INTEGER,
    valor_compra FLOAT,
    valor_venta FLOAT,
    descripcion_producto VARCHAR2(255),
    nombre_producto VARCHAR2(255),
    cantidad_producto INTEGER
);

CREATE TABLE Personas (
    id_persona INTEGER,
    nombre_persona VARCHAR2(255),
    direccion_persona VARCHAR2(255),
    estado_empleado NUMBER(1) 
);

CREATE TABLE Ofertas (
    id_proveedor INTEGER,
    precio FLOAT,
    codigo_producto INTEGER
);

CREATE TABLE Productos_Compras (
    codigo_producto INTEGER,
    id_compra INTEGER
);

CREATE TABLE Compras (
    id_compra INTEGER,
    id_proveedor INTEGER,
    tipo_metodo_pago VARCHAR2(255),
    valor_compra FLOAT,
    fecha_hora_compra TIMESTAMP,
    estado_compra NUMBER(1),
    fecha_vencimiento DATE
);

CREATE TABLE Personas_Compras (
    id_persona INTEGER,
    id_compra INTEGER
);

CREATE TABLE Metodos_pago (
    tipo_metodo_pago VARCHAR2(255)
);

CREATE TABLE Proveedores (
    id_proveedor INTEGER,
    id_tipo_proveedor INTEGER,
    id_tipo_documento INTEGER,
    telefono_contacto INTEGER,
    nombre_proveedor VARCHAR2(255)
);

CREATE TABLE Tipos_Proveedores (
    id_tipo_proveedor INTEGER,
    categoria_proveedor VARCHAR2(255)
);

CREATE TABLE Tipos_Documentos (
    id_tipo_documento INTEGER,
    tipicidad_documento VARCHAR2(255)
);

CREATE TABLE Devoluciones (
    id_devolucion INTEGER,
    motivo VARCHAR2(1024)
);

CREATE TABLE Devoluciones_productos (
    id_devolucion INTEGER,
    codigo_producto INTEGER,
    valor_compra INTEGER,
    valor_venta INTEGER
);
