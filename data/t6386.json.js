window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6386","name":"HR_PF_SchemaDimensionality","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_SchemaDimensionality"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-77982","object_id":"column-77982","name":"uSchemaDimensionalityPK","name_without_path":"uSchemaDimensionalityPK","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77983","object_id":"column-77983","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6382","name":"HR_PF_Schema","name_show_schema":"dbo.HR_PF_Schema"}]},{"id":"column-77984","object_id":"column-77984","name":"cDimensionalityCode","name_without_path":"cDimensionalityCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6282","name":"HR_PF_Dimensionality","name_show_schema":"dbo.HR_PF_Dimensionality"}]},{"id":"column-77985","object_id":"column-77985","name":"fWeight","name_without_path":"fWeight","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77986","object_id":"column-77986","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"HR_PF_Dimensionality_HR_PF_SchemaDimensionality_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaDimensionality","foreign_table_show_schema":"dbo.HR_PF_SchemaDimensionality","foreign_table_verbose":"HR_PF_SchemaDimensionality","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaDimensionality","foreign_table_object_id":"t6386","primary_table":"HR_PF_Dimensionality","primary_table_show_schema":"dbo.HR_PF_Dimensionality","primary_table_verbose":"HR_PF_Dimensionality","primary_table_verbose_show_schema":"dbo.HR_PF_Dimensionality","primary_table_object_id":"t6282","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDimensionalityCode","foreign_column_path":null,"foreign_column":"cDimensionalityCode"}],"custom_fields":{}},{"name":"HR_PF_Schema_HR_PF_SchemaDimensionality_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaDimensionality","foreign_table_show_schema":"dbo.HR_PF_SchemaDimensionality","foreign_table_verbose":"HR_PF_SchemaDimensionality","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaDimensionality","foreign_table_object_id":"t6386","primary_table":"HR_PF_Schema","primary_table_show_schema":"dbo.HR_PF_Schema","primary_table_verbose":"HR_PF_Schema","primary_table_verbose_show_schema":"dbo.HR_PF_Schema","primary_table_object_id":"t6382","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSchemaCode","foreign_column_path":null,"foreign_column":"cSchemaCode"}],"custom_fields":{}}],"unique_keys":[{"name":"HR_PF_SchemaDimensionality_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uSchemaDimensionalityPK","name":"uSchemaDimensionalityPK"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};