window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5386","name":"Factory","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Factory"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-63558","object_id":"column-63558","name":"cFactoryCode","name_without_path":"cFactoryCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63559","object_id":"column-63559","name":"cFactoryName","name_without_path":"cFactoryName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63560","object_id":"column-63560","name":"cFactoryPhone","name_without_path":"cFactoryPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63561","object_id":"column-63561","name":"cFactoryFax","name_without_path":"cFactoryFax","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63562","object_id":"column-63562","name":"cFactoryAddress","name_without_path":"cFactoryAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63563","object_id":"column-63563","name":"cFactoryEmail","name_without_path":"cFactoryEmail","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63564","object_id":"column-63564","name":"bDefaultFactory","name_without_path":"bDefaultFactory","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63565","object_id":"column-63565","name":"dEndDate","name_without_path":"dEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63566","object_id":"column-63566","name":"iCalendarId","name_without_path":"iCalendarId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63567","object_id":"column-63567","name":"cCalendarCode","name_without_path":"cCalendarCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63568","object_id":"column-63568","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_InvFactoryContrapose_Factory","title":null,"description":null,"is_user_defined":false,"foreign_table":"InvFactoryContrapose","foreign_table_show_schema":"dbo.InvFactoryContrapose","foreign_table_verbose":"InvFactoryContrapose","foreign_table_verbose_show_schema":"dbo.InvFactoryContrapose","foreign_table_object_id":"t6903","primary_table":"Factory","primary_table_show_schema":"dbo.Factory","primary_table_verbose":"Factory","primary_table_verbose_show_schema":"dbo.Factory","primary_table_object_id":"t5386","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cFactoryCode","foreign_column_path":null,"foreign_column":"cPlanFactoryCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Factory","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cFactoryCode","name":"cFactoryCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};