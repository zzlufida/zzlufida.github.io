window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7773","name":"rb_Events","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rb_Events"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-110839","object_id":"column-110839","name":"ItemID","name_without_path":"ItemID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110840","object_id":"column-110840","name":"ModuleID","name_without_path":"ModuleID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7789","name":"rb_Modules","name_show_schema":"dbo.rb_Modules"}]},{"id":"column-110841","object_id":"column-110841","name":"CreatedByUser","name_without_path":"CreatedByUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110842","object_id":"column-110842","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110843","object_id":"column-110843","name":"Title","name_without_path":"Title","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110844","object_id":"column-110844","name":"WhereWhen","name_without_path":"WhereWhen","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110845","object_id":"column-110845","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110846","object_id":"column-110846","name":"ExpireDate","name_without_path":"ExpireDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110847","object_id":"column-110847","name":"AllDay","name_without_path":"AllDay","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110848","object_id":"column-110848","name":"StartDate","name_without_path":"StartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110849","object_id":"column-110849","name":"StartTime","name_without_path":"StartTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_rb_Events_rb_Modules","title":null,"description":null,"is_user_defined":false,"foreign_table":"rb_Events","foreign_table_show_schema":"dbo.rb_Events","foreign_table_verbose":"rb_Events","foreign_table_verbose_show_schema":"dbo.rb_Events","foreign_table_object_id":"t7773","primary_table":"rb_Modules","primary_table_show_schema":"dbo.rb_Modules","primary_table_verbose":"rb_Modules","primary_table_verbose_show_schema":"dbo.rb_Modules","primary_table_object_id":"t7789","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ModuleID","foreign_column_path":null,"foreign_column":"ModuleID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_rb_Events","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ItemID","name":"ItemID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};