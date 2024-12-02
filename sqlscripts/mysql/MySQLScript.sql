USE tienda;

CREATE TABLE Personas (
    id_persona INT AUTO_INCREMENT, 
    nombre_persona VARCHAR(255),
    direccion_persona VARCHAR(255),
    estado_empleado TINYINT,
    PRIMARY KEY (id_persona)
);

CREATE TABLE Metodos_pago (
    tipo_metodo_pago VARCHAR(255),
    PRIMARY KEY (tipo_metodo_pago)
);

CREATE TABLE Tipos_Proveedores (
    id_tipo_proveedor INT AUTO_INCREMENT, 
    categoria_proveedor VARCHAR(255),
    PRIMARY KEY (id_tipo_proveedor)
);

CREATE TABLE Tipos_Documentos (
    id_tipo_documento INT AUTO_INCREMENT, 
    tipicidad_documento VARCHAR(255),
    PRIMARY KEY (id_tipo_documento)
);

CREATE TABLE Devoluciones (
    id_devolucion INT AUTO_INCREMENT, 
    motivo VARCHAR(1024),
    PRIMARY KEY (id_devolucion)
);

CREATE TABLE Ventas (
    id_venta INT AUTO_INCREMENT, 
    id_persona INT,
    tipo_metodo_pago VARCHAR(255),
    valor_total FLOAT,
    fecha_hora_venta DATETIME,
    estado_venta TINYINT,
    PRIMARY KEY (id_venta),
    FOREIGN KEY (id_persona) REFERENCES Personas(id_persona),
    FOREIGN KEY (tipo_metodo_pago) REFERENCES Metodos_pago(tipo_metodo_pago)
);

CREATE TABLE Productos (
    codigo_producto INT AUTO_INCREMENT, 
    id_persona INT,
    valor_compra FLOAT,
    valor_venta FLOAT,
    descripcion_producto VARCHAR(255),
    nombre_producto VARCHAR(255),
    cantidad_producto INT,
    PRIMARY KEY (codigo_producto),
    FOREIGN KEY (id_persona) REFERENCES Personas(id_persona)
);

CREATE TABLE Proveedores (
    id_proveedor INT AUTO_INCREMENT, 
    id_tipo_proveedor INT,
    id_tipo_documento INT,
    telefono_contacto INT,
    nombre_proveedor VARCHAR(255),
    PRIMARY KEY (id_proveedor),
    FOREIGN KEY (id_tipo_proveedor) REFERENCES Tipos_Proveedores(id_tipo_proveedor),
    FOREIGN KEY (id_tipo_documento) REFERENCES Tipos_Documentos(id_tipo_documento)
);

CREATE TABLE Ofertas (
    id_proveedor INT,
    precio FLOAT,
    codigo_producto INT,
    PRIMARY KEY (id_proveedor, codigo_producto),
    FOREIGN KEY (id_proveedor) REFERENCES Proveedores(id_proveedor),
    FOREIGN KEY (codigo_producto) REFERENCES Productos(codigo_producto)
);

CREATE TABLE Compras (
    id_compra INT AUTO_INCREMENT, 
    id_proveedor INT,
    tipo_metodo_pago VARCHAR(255),
    valor_compra FLOAT,
    fecha_hora_compra DATETIME,
    estado_compra TINYINT,
    fecha_vencimiento DATE,
    PRIMARY KEY (id_compra),
    FOREIGN KEY (id_proveedor) REFERENCES Proveedores(id_proveedor),
    FOREIGN KEY (tipo_metodo_pago) REFERENCES Metodos_pago(tipo_metodo_pago)
);

CREATE TABLE Productos_Ventas (
    codigo_producto INT,
    id_venta INT,
    valor_venta FLOAT,
    cantidad_producto INT,
    PRIMARY KEY (codigo_producto, id_venta),
    FOREIGN KEY (codigo_producto) REFERENCES Productos(codigo_producto),
    FOREIGN KEY (id_venta) REFERENCES Ventas(id_venta)
);

CREATE TABLE Productos_Compras (
    codigo_producto INT,
    id_compra INT,
    PRIMARY KEY (codigo_producto, id_compra),
    FOREIGN KEY (codigo_producto) REFERENCES Productos(codigo_producto),
    FOREIGN KEY (id_compra) REFERENCES Compras(id_compra)
);

CREATE TABLE Personas_Compras (
    id_persona INT,
    id_compra INT,
    PRIMARY KEY (id_persona, id_compra),
    FOREIGN KEY (id_persona) REFERENCES Personas(id_persona),
    FOREIGN KEY (id_compra) REFERENCES Compras(id_compra)
);

CREATE TABLE Devoluciones_productos (
    id_devolucion INT,
    codigo_producto INT,
    valor_compra INT,
    valor_venta INT,
    PRIMARY KEY (id_devolucion, codigo_producto),
    FOREIGN KEY (id_devolucion) REFERENCES Devoluciones(id_devolucion),
    FOREIGN KEY (codigo_producto) REFERENCES Productos(codigo_producto)
);
