window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4099","name":"BG_SynExpr","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_SynExpr"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40801","object_id":"column-40801","name":"cID","name_without_path":"cID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40802","object_id":"column-40802","name":"cSynCode","name_without_path":"cSynCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4100","name":"BG_SynStyle","name_show_schema":"dbo.BG_SynStyle"}]},{"id":"column-40806","object_id":"column-40806","name":"iCol","name_without_path":"iCol","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40803","object_id":"column-40803","name":"iRow","name_without_path":"iRow","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40804","object_id":"column-40804","name":"cExpr","name_without_path":"cExpr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40805","object_id":"column-40805","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40807","object_id":"column-40807","name":"iMakeYear","name_without_path":"iMakeYear","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4100","name":"BG_SynStyle","name_show_schema":"dbo.BG_SynStyle"}]}],"relations":[{"name":"FK_BG_SynExpr_BG_SynStyle","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_SynExpr","foreign_table_show_schema":"dbo.BG_SynExpr","foreign_table_verbose":"BG_SynExpr","foreign_table_verbose_show_schema":"dbo.BG_SynExpr","foreign_table_object_id":"t4099","primary_table":"BG_SynStyle","primary_table_show_schema":"dbo.BG_SynStyle","primary_table_verbose":"BG_SynStyle","primary_table_verbose_show_schema":"dbo.BG_SynStyle","primary_table_object_id":"t4100","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSynCode","foreign_column_path":null,"foreign_column":"cSynCode"},{"primary_column_path":null,"primary_column":"iMakeYear","foreign_column_path":null,"foreign_column":"iMakeYear"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_SynExpr","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iMakeYear","name":"iMakeYear"},{"path":null,"name_without_path":"cSynCode","name":"cSynCode"},{"path":null,"name_without_path":"iCol","name":"iCol"},{"path":null,"name_without_path":"iRow","name":"iRow"}],"custom_fields":{}},{"name":"IX_BG_SynExpr","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cID","name":"cID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};