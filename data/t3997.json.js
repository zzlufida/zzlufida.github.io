window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3997","name":"BG_CtrlContradistinguish_Detail","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_CtrlContradistinguish_Detail"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39469","object_id":"column-39469","name":"cID","name_without_path":"cID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3998","name":"BG_CtrlContradistinguish_Master","name_show_schema":"dbo.BG_CtrlContradistinguish_Master"}]},{"id":"column-39472","object_id":"column-39472","name":"cCtrlArchiveCode","name_without_path":"cCtrlArchiveCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39470","object_id":"column-39470","name":"cBudgetArchiveCode","name_without_path":"cBudgetArchiveCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39471","object_id":"column-39471","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_BG_CtrlContradistinguish_Detail_BG_CtrlContradistinguish_Master","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlContradistinguish_Detail","foreign_table_show_schema":"dbo.BG_CtrlContradistinguish_Detail","foreign_table_verbose":"BG_CtrlContradistinguish_Detail","foreign_table_verbose_show_schema":"dbo.BG_CtrlContradistinguish_Detail","foreign_table_object_id":"t3997","primary_table":"BG_CtrlContradistinguish_Master","primary_table_show_schema":"dbo.BG_CtrlContradistinguish_Master","primary_table_verbose":"BG_CtrlContradistinguish_Master","primary_table_verbose_show_schema":"dbo.BG_CtrlContradistinguish_Master","primary_table_object_id":"t3998","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cID","foreign_column_path":null,"foreign_column":"cID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_CtrlContradistinguish_Detail","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cID","name":"cID"},{"path":null,"name_without_path":"cCtrlArchiveCode","name":"cCtrlArchiveCode"},{"path":null,"name_without_path":"cBudgetArchiveCode","name":"cBudgetArchiveCode"}],"custom_fields":{}},{"name":"IX_BG_CtrlContradistinguish_Detail_1","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cID","name":"cID"},{"path":null,"name_without_path":"cCtrlArchiveCode","name":"cCtrlArchiveCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};