window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3903","name":"ATP_ProjectDetails","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ATP_ProjectDetails"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-38525","object_id":"column-38525","name":"cProjectCode","name_without_path":"cProjectCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3904","name":"ATP_ProjectMain","name_show_schema":"dbo.ATP_ProjectMain"}]},{"id":"column-38524","object_id":"column-38524","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9757","name":"Warehouse","name_show_schema":"dbo.Warehouse"}]}],"relations":[{"name":"FK_PROJECTSUB_REF_PROJECTMAIN","title":null,"description":null,"is_user_defined":false,"foreign_table":"ATP_ProjectDetails","foreign_table_show_schema":"dbo.ATP_ProjectDetails","foreign_table_verbose":"ATP_ProjectDetails","foreign_table_verbose_show_schema":"dbo.ATP_ProjectDetails","foreign_table_object_id":"t3903","primary_table":"ATP_ProjectMain","primary_table_show_schema":"dbo.ATP_ProjectMain","primary_table_verbose":"ATP_ProjectMain","primary_table_verbose_show_schema":"dbo.ATP_ProjectMain","primary_table_object_id":"t3904","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cProjectCode","foreign_column_path":null,"foreign_column":"cProjectCode"}],"custom_fields":{}},{"name":"FK_PROJECTSUB_REF_WAREHOUSE","title":null,"description":null,"is_user_defined":false,"foreign_table":"ATP_ProjectDetails","foreign_table_show_schema":"dbo.ATP_ProjectDetails","foreign_table_verbose":"ATP_ProjectDetails","foreign_table_verbose_show_schema":"dbo.ATP_ProjectDetails","foreign_table_object_id":"t3903","primary_table":"Warehouse","primary_table_show_schema":"dbo.Warehouse","primary_table_verbose":"Warehouse","primary_table_verbose_show_schema":"dbo.Warehouse","primary_table_object_id":"t9757","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cWhCode","foreign_column_path":null,"foreign_column":"cWhCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_ATP_PROJECTDETAILS","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cProjectCode","name":"cProjectCode"},{"path":null,"name_without_path":"cWhCode","name":"cWhCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};