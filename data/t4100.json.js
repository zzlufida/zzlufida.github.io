window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4100","name":"BG_SynStyle","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_SynStyle"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40808","object_id":"column-40808","name":"cSynCode","name_without_path":"cSynCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40809","object_id":"column-40809","name":"cSynName","name_without_path":"cSynName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40810","object_id":"column-40810","name":"bSeason","name_without_path":"bSeason","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40811","object_id":"column-40811","name":"bMonth","name_without_path":"bMonth","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40812","object_id":"column-40812","name":"bAudit","name_without_path":"bAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40813","object_id":"column-40813","name":"iFile","name_without_path":"iFile","description":null,"is_pk":false,"is_identity":false,"data_type":"image","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40814","object_id":"column-40814","name":"iUnitCol","name_without_path":"iUnitCol","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40815","object_id":"column-40815","name":"iUnitRow","name_without_path":"iUnitRow","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40816","object_id":"column-40816","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40817","object_id":"column-40817","name":"bYear","name_without_path":"bYear","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40818","object_id":"column-40818","name":"iMakeYear","name_without_path":"iMakeYear","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_BG_SynExpr_BG_SynStyle","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_SynExpr","foreign_table_show_schema":"dbo.BG_SynExpr","foreign_table_verbose":"BG_SynExpr","foreign_table_verbose_show_schema":"dbo.BG_SynExpr","foreign_table_object_id":"t4099","primary_table":"BG_SynStyle","primary_table_show_schema":"dbo.BG_SynStyle","primary_table_verbose":"BG_SynStyle","primary_table_verbose_show_schema":"dbo.BG_SynStyle","primary_table_object_id":"t4100","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSynCode","foreign_column_path":null,"foreign_column":"cSynCode"},{"primary_column_path":null,"primary_column":"iMakeYear","foreign_column_path":null,"foreign_column":"iMakeYear"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_SynStyle","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iMakeYear","name":"iMakeYear"},{"path":null,"name_without_path":"cSynCode","name":"cSynCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};