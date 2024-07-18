window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7609","name":"PP_ProductPO","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PP_ProductPO"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-104695","object_id":"column-104695","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104696","object_id":"column-104696","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104697","object_id":"column-104697","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104698","object_id":"column-104698","name":"cVerifier","name_without_path":"cVerifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104699","object_id":"column-104699","name":"dCheckDate","name_without_path":"dCheckDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104700","object_id":"column-104700","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104701","object_id":"column-104701","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4907","name":"Department","name_show_schema":"dbo.Department"}]},{"id":"column-104702","object_id":"column-104702","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7326","name":"Person","name_show_schema":"dbo.Person"}]},{"id":"column-104703","object_id":"column-104703","name":"cPeriod","name_without_path":"cPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7602","name":"PP_period","name_show_schema":"dbo.PP_period"}]},{"id":"column-104704","object_id":"column-104704","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104705","object_id":"column-104705","name":"iProperty","name_without_path":"iProperty","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104706","object_id":"column-104706","name":"iState","name_without_path":"iState","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104707","object_id":"column-104707","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-104708","object_id":"column-104708","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_PP_ProductPO_Department","title":null,"description":null,"is_user_defined":false,"foreign_table":"PP_ProductPO","foreign_table_show_schema":"dbo.PP_ProductPO","foreign_table_verbose":"PP_ProductPO","foreign_table_verbose_show_schema":"dbo.PP_ProductPO","foreign_table_object_id":"t7609","primary_table":"Department","primary_table_show_schema":"dbo.Department","primary_table_verbose":"Department","primary_table_verbose_show_schema":"dbo.Department","primary_table_object_id":"t4907","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDepCode","foreign_column_path":null,"foreign_column":"cDepCode"}],"custom_fields":{}},{"name":"FK_PP_ProductPO_Person2","title":null,"description":null,"is_user_defined":false,"foreign_table":"PP_ProductPO","foreign_table_show_schema":"dbo.PP_ProductPO","foreign_table_verbose":"PP_ProductPO","foreign_table_verbose_show_schema":"dbo.PP_ProductPO","foreign_table_object_id":"t7609","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person","primary_table_verbose_show_schema":"dbo.Person","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_PP_ProductPO_PP_period","title":null,"description":null,"is_user_defined":false,"foreign_table":"PP_ProductPO","foreign_table_show_schema":"dbo.PP_ProductPO","foreign_table_verbose":"PP_ProductPO","foreign_table_verbose_show_schema":"dbo.PP_ProductPO","foreign_table_object_id":"t7609","primary_table":"PP_period","primary_table_show_schema":"dbo.PP_period","primary_table_verbose":"PP_period","primary_table_verbose_show_schema":"dbo.PP_period","primary_table_object_id":"t7602","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPeriod","foreign_column_path":null,"foreign_column":"cPeriod"}],"custom_fields":{}},{"name":"FK_PP_POMain_PP_ProductPO","title":null,"description":null,"is_user_defined":false,"foreign_table":"PP_POMain","foreign_table_show_schema":"dbo.PP_POMain","foreign_table_verbose":"PP_POMain","foreign_table_verbose_show_schema":"dbo.PP_POMain","foreign_table_object_id":"t7605","primary_table":"PP_ProductPO","primary_table_show_schema":"dbo.PP_ProductPO","primary_table_verbose":"PP_ProductPO","primary_table_verbose_show_schema":"dbo.PP_ProductPO","primary_table_object_id":"t7609","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"ID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_PP_ProductPO","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};