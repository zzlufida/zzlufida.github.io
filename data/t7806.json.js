window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7806","name":"rb_Solutions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rb_Solutions"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-111086","object_id":"column-111086","name":"SolutionsID","name_without_path":"SolutionsID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-111087","object_id":"column-111087","name":"SolDescription","name_without_path":"SolDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_rb_SolutionModuleDefintions_rb_Solutions","title":null,"description":null,"is_user_defined":false,"foreign_table":"rb_SolutionModuleDefinitions","foreign_table_show_schema":"dbo.rb_SolutionModuleDefinitions","foreign_table_verbose":"rb_SolutionModuleDefinitions","foreign_table_verbose_show_schema":"dbo.rb_SolutionModuleDefinitions","foreign_table_object_id":"t7805","primary_table":"rb_Solutions","primary_table_show_schema":"dbo.rb_Solutions","primary_table_verbose":"rb_Solutions","primary_table_verbose_show_schema":"dbo.rb_Solutions","primary_table_object_id":"t7806","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SolutionsID","foreign_column_path":null,"foreign_column":"SolutionsID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_rb_Solutions","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"SolutionsID","name":"SolutionsID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};