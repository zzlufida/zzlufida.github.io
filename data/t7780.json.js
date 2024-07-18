window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7780","name":"rb_Links","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rb_Links"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-110894","object_id":"column-110894","name":"ItemID","name_without_path":"ItemID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110895","object_id":"column-110895","name":"ModuleID","name_without_path":"ModuleID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7789","name":"rb_Modules","name_show_schema":"dbo.rb_Modules"}]},{"id":"column-110896","object_id":"column-110896","name":"CreatedByUser","name_without_path":"CreatedByUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110897","object_id":"column-110897","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110898","object_id":"column-110898","name":"Title","name_without_path":"Title","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110899","object_id":"column-110899","name":"Url","name_without_path":"Url","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"800","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110900","object_id":"column-110900","name":"MobileUrl","name_without_path":"MobileUrl","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"250","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110901","object_id":"column-110901","name":"ViewOrder","name_without_path":"ViewOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110902","object_id":"column-110902","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110903","object_id":"column-110903","name":"Target","name_without_path":"Target","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":"'_new'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_rb_Links_rb_Modules","title":null,"description":null,"is_user_defined":false,"foreign_table":"rb_Links","foreign_table_show_schema":"dbo.rb_Links","foreign_table_verbose":"rb_Links","foreign_table_verbose_show_schema":"dbo.rb_Links","foreign_table_object_id":"t7780","primary_table":"rb_Modules","primary_table_show_schema":"dbo.rb_Modules","primary_table_verbose":"rb_Modules","primary_table_verbose_show_schema":"dbo.rb_Modules","primary_table_object_id":"t7789","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ModuleID","foreign_column_path":null,"foreign_column":"ModuleID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_rb_Links","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ItemID","name":"ItemID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};