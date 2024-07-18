window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4930","name":"EA_FLOW_Object_Scope","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EA_FLOW_Object_Scope"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-52500","object_id":"column-52500","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52496","object_id":"column-52496","name":"EAO_ID","name_without_path":"EAO_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52497","object_id":"column-52497","name":"EAF_ID","name_without_path":"EAF_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"42","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52498","object_id":"column-52498","name":"ECC_Value","name_without_path":"ECC_Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52499","object_id":"column-52499","name":"EC_Code","name_without_path":"EC_Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5096","name":"EntityClass","name_show_schema":"dbo.EntityClass"}]}],"relations":[{"name":"FK_EAFOSEntityClass_ECCode","title":null,"description":null,"is_user_defined":false,"foreign_table":"EA_FLOW_Object_Scope","foreign_table_show_schema":"dbo.EA_FLOW_Object_Scope","foreign_table_verbose":"EA_FLOW_Object_Scope","foreign_table_verbose_show_schema":"dbo.EA_FLOW_Object_Scope","foreign_table_object_id":"t4930","primary_table":"EntityClass","primary_table_show_schema":"dbo.EntityClass","primary_table_verbose":"EntityClass","primary_table_verbose_show_schema":"dbo.EntityClass","primary_table_object_id":"t5096","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EC_Code","foreign_column_path":null,"foreign_column":"EC_Code"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_EAFOS","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"AutoID","name":"AutoID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};