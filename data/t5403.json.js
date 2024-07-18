window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5403","name":"FB_FormData_BgItem","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FB_FormData_BgItem"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-63705","object_id":"column-63705","name":"cVouchID","name_without_path":"cVouchID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5402","name":"FB_FormData","name_show_schema":"dbo.FB_FormData"}]},{"id":"column-63706","object_id":"column-63706","name":"iYear","name_without_path":"iYear","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5387","name":"FB_BgItem","name_show_schema":"dbo.FB_BgItem"},{"id":"t5402","name":"FB_FormData","name_show_schema":"dbo.FB_FormData"}]},{"id":"column-63707","object_id":"column-63707","name":"cFormCode","name_without_path":"cFormCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63708","object_id":"column-63708","name":"cBgItemCode","name_without_path":"cBgItemCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5387","name":"FB_BgItem","name_show_schema":"dbo.FB_BgItem"}]},{"id":"column-63709","object_id":"column-63709","name":"cDispName","name_without_path":"cDispName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63710","object_id":"column-63710","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-63711","object_id":"column-63711","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_FB_FormData_BgItem_BgItemCode","title":null,"description":null,"is_user_defined":false,"foreign_table":"FB_FormData_BgItem","foreign_table_show_schema":"dbo.FB_FormData_BgItem","foreign_table_verbose":"FB_FormData_BgItem","foreign_table_verbose_show_schema":"dbo.FB_FormData_BgItem","foreign_table_object_id":"t5403","primary_table":"FB_BgItem","primary_table_show_schema":"dbo.FB_BgItem","primary_table_verbose":"FB_BgItem","primary_table_verbose_show_schema":"dbo.FB_BgItem","primary_table_object_id":"t5387","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"iYear","foreign_column_path":null,"foreign_column":"iYear"},{"primary_column_path":null,"primary_column":"cBgItemCode","foreign_column_path":null,"foreign_column":"cBgItemCode"}],"custom_fields":{}},{"name":"FK_FormData_BgItem","title":null,"description":null,"is_user_defined":false,"foreign_table":"FB_FormData_BgItem","foreign_table_show_schema":"dbo.FB_FormData_BgItem","foreign_table_verbose":"FB_FormData_BgItem","foreign_table_verbose_show_schema":"dbo.FB_FormData_BgItem","foreign_table_object_id":"t5403","primary_table":"FB_FormData","primary_table_show_schema":"dbo.FB_FormData","primary_table_verbose":"FB_FormData","primary_table_verbose_show_schema":"dbo.FB_FormData","primary_table_object_id":"t5402","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cVouchID","foreign_column_path":null,"foreign_column":"cVouchID"},{"primary_column_path":null,"primary_column":"iYear","foreign_column_path":null,"foreign_column":"iYear"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_FB_FormData_BgItem","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cVouchID","name":"cVouchID"},{"path":null,"name_without_path":"iYear","name":"iYear"},{"path":null,"name_without_path":"cFormCode","name":"cFormCode"},{"path":null,"name_without_path":"cBgItemCode","name":"cBgItemCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};