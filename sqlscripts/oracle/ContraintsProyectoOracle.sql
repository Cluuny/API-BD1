ALTER TABLE Personas ADD CONSTRAINT pk_personas PRIMARY KEY (id_persona);
ALTER TABLE Metodos_pago ADD CONSTRAINT pk_metodos_pago PRIMARY KEY (tipo_metodo_pago);

ALTER TABLE Ventas ADD CONSTRAINT pk_ventas PRIMARY KEY (id_venta);
ALTER TABLE Ventas ADD CONSTRAINT fk_ventas_personas FOREIGN KEY (id_persona) REFERENCES Personas (id_persona);
ALTER TABLE Ventas ADD CONSTRAINT fk_ventas_metodos_pago FOREIGN KEY (tipo_metodo_pago) REFERENCES Metodos_pago (tipo_metodo_pago);

ALTER TABLE Productos ADD CONSTRAINT pk_productos PRIMARY KEY (codigo_producto);
ALTER TABLE Productos ADD CONSTRAINT fk_productos_personas FOREIGN KEY (id_persona) REFERENCES Personas (id_persona);

ALTER TABLE Tipos_Proveedores ADD CONSTRAINT pk_tipos_proveedores PRIMARY KEY (id_tipo_proveedor);

ALTER TABLE Tipos_Documentos ADD CONSTRAINT pk_tipos_documentos PRIMARY KEY (id_tipo_documento);

ALTER TABLE Devoluciones ADD CONSTRAINT pk_devoluciones PRIMARY KEY (id_devolucion);

ALTER TABLE Proveedores ADD CONSTRAINT pk_proveedores PRIMARY KEY (id_proveedor);
ALTER TABLE Proveedores ADD CONSTRAINT fk_proveedores_tipos_proveedores FOREIGN KEY (id_tipo_proveedor) REFERENCES Tipos_Proveedores (id_tipo_proveedor);
ALTER TABLE Proveedores ADD CONSTRAINT fk_proveedores_tipos_documentos FOREIGN KEY (id_tipo_documento) REFERENCES Tipos_Documentos (id_tipo_documento);

ALTER TABLE Productos_Ventas ADD CONSTRAINT pk_productos_ventas PRIMARY KEY (codigo_producto, id_venta);
ALTER TABLE Productos_Ventas ADD CONSTRAINT fk_productos_ventas_productos FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto);
ALTER TABLE Productos_Ventas ADD CONSTRAINT fk_productos_ventas_ventas FOREIGN KEY (id_venta) REFERENCES Ventas (id_venta);

ALTER TABLE Compras ADD CONSTRAINT pk_compras PRIMARY KEY (id_compra);
ALTER TABLE Compras ADD CONSTRAINT fk_compras_proveedores FOREIGN KEY (id_proveedor) REFERENCES Proveedores (id_proveedor);
ALTER TABLE Compras ADD CONSTRAINT fk_compras_metodos_pago FOREIGN KEY (tipo_metodo_pago) REFERENCES Metodos_pago (tipo_metodo_pago);

ALTER TABLE Ofertas ADD CONSTRAINT pk_ofertas PRIMARY KEY (id_proveedor, codigo_producto);
ALTER TABLE Ofertas ADD CONSTRAINT fk_ofertas_proveedores FOREIGN KEY (id_proveedor) REFERENCES Proveedores (id_proveedor);
ALTER TABLE Ofertas ADD CONSTRAINT fk_ofertas_productos FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto);

ALTER TABLE Productos_Compras ADD CONSTRAINT pk_productos_compras PRIMARY KEY (codigo_producto, id_compra); 
ALTER TABLE Productos_Compras ADD CONSTRAINT fk_productos_compras_productos FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto);
ALTER TABLE Productos_Compras ADD CONSTRAINT fk_productos_compras_compras FOREIGN KEY (id_compra) REFERENCES Compras (id_compra);


ALTER TABLE Personas_Compras ADD CONSTRAINT pk_personas_compras PRIMARY KEY (id_persona, id_compra);
ALTER TABLE Personas_Compras ADD CONSTRAINT fk_personas_compras_personas FOREIGN KEY (id_persona) REFERENCES Personas (id_persona);
ALTER TABLE Personas_Compras ADD CONSTRAINT fk_personas_compras_compras FOREIGN KEY (id_compra) REFERENCES Compras (id_compra);

ALTER TABLE Devoluciones_productos ADD CONSTRAINT pk_devoluciones_productos PRIMARY KEY (id_devolucion, codigo_producto);
ALTER TABLE Devoluciones_productos ADD CONSTRAINT fk_devoluciones_productos_devoluciones FOREIGN KEY (id_devolucion) REFERENCES Devoluciones (id_devolucion);
ALTER TABLE Devoluciones_productos ADD CONSTRAINT fk_devoluciones_productos_productos FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto);
