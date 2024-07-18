window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7870","name":"Reason","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Reason"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-114674","object_id":"column-114674","name":"cReasonCode","name_without_path":"cReasonCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-114675","object_id":"column-114675","name":"cReasonName","name_without_path":"cReasonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-114676","object_id":"column-114676","name":"iReasontype","name_without_path":"iReasontype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-114677","object_id":"column-114677","name":"cReasonMemo","name_without_path":"cReasonMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"240","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-114678","object_id":"column-114678","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_QMCHECKVOUCHER_REASON","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMCHECKVOUCHER","foreign_table_show_schema":"dbo.QMCHECKVOUCHER","foreign_table_verbose":"QMCHECKVOUCHER","foreign_table_verbose_show_schema":"dbo.QMCHECKVOUCHER","foreign_table_object_id":"t7705","primary_table":"Reason","primary_table_show_schema":"dbo.Reason","primary_table_verbose":"Reason","primary_table_verbose_show_schema":"dbo.Reason","primary_table_object_id":"t7870","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cReasonCode","foreign_column_path":null,"foreign_column":"CREASONCODE"}],"custom_fields":{}},{"name":"FK_QMREJECTVOUCHERS_REASON","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMREJECTVOUCHERS","foreign_table_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_verbose":"QMREJECTVOUCHERS","foreign_table_verbose_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_object_id":"t7741","primary_table":"Reason","primary_table_show_schema":"dbo.Reason","primary_table_verbose":"Reason","primary_table_verbose_show_schema":"dbo.Reason","primary_table_object_id":"t7870","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cReasonCode","foreign_column_path":null,"foreign_column":"CREASONCODE"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Reason","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cReasonCode","name":"cReasonCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};