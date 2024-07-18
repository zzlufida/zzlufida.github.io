window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7762","name":"rb_ComponentModule","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rb_ComponentModule"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-110758","object_id":"column-110758","name":"ModuleID","name_without_path":"ModuleID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7789","name":"rb_Modules","name_show_schema":"dbo.rb_Modules"}]},{"id":"column-110759","object_id":"column-110759","name":"CreatedByUser","name_without_path":"CreatedByUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110760","object_id":"column-110760","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110761","object_id":"column-110761","name":"Title","name_without_path":"Title","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110762","object_id":"column-110762","name":"Component","name_without_path":"Component","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_ComponentModule_Modules","title":null,"description":null,"is_user_defined":false,"foreign_table":"rb_ComponentModule","foreign_table_show_schema":"dbo.rb_ComponentModule","foreign_table_verbose":"rb_ComponentModule","foreign_table_verbose_show_schema":"dbo.rb_ComponentModule","foreign_table_object_id":"t7762","primary_table":"rb_Modules","primary_table_show_schema":"dbo.rb_Modules","primary_table_verbose":"rb_Modules","primary_table_verbose_show_schema":"dbo.rb_Modules","primary_table_object_id":"t7789","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ModuleID","foreign_column_path":null,"foreign_column":"ModuleID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_ComponentModule","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ModuleID","name":"ModuleID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};