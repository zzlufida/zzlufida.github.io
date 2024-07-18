window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3993","name":"BG_CtrlBaseBillInfo","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_CtrlBaseBillInfo"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39416","object_id":"column-39416","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39417","object_id":"column-39417","name":"cBillName","name_without_path":"cBillName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39418","object_id":"column-39418","name":"cMasterTable","name_without_path":"cMasterTable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39419","object_id":"column-39419","name":"cDetailTable","name_without_path":"cDetailTable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39420","object_id":"column-39420","name":"cMasterKeyField","name_without_path":"cMasterKeyField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39421","object_id":"column-39421","name":"cDetailKeyField","name_without_path":"cDetailKeyField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39422","object_id":"column-39422","name":"cMoneyField_d","name_without_path":"cMoneyField_d","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39423","object_id":"column-39423","name":"cMoneyField_c","name_without_path":"cMoneyField_c","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39424","object_id":"column-39424","name":"cTaxField","name_without_path":"cTaxField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39425","object_id":"column-39425","name":"cNonTaxField","name_without_path":"cNonTaxField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39426","object_id":"column-39426","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39427","object_id":"column-39427","name":"cAppendix","name_without_path":"cAppendix","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":false,"computed_formula":null,"default_value":"N''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"BG_CtrlBaseBillInfo_BG_CtrlBaseFieldInfo_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlBaseFieldInfo","foreign_table_show_schema":"dbo.BG_CtrlBaseFieldInfo","foreign_table_verbose":"BG_CtrlBaseFieldInfo","foreign_table_verbose_show_schema":"dbo.BG_CtrlBaseFieldInfo","foreign_table_object_id":"t3994","primary_table":"BG_CtrlBaseBillInfo","primary_table_show_schema":"dbo.BG_CtrlBaseBillInfo","primary_table_verbose":"BG_CtrlBaseBillInfo","primary_table_verbose_show_schema":"dbo.BG_CtrlBaseBillInfo","primary_table_object_id":"t3993","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cBillCode","foreign_column_path":null,"foreign_column":"cBillCode"}],"custom_fields":{}},{"name":"BG_CtrlBaseBillInfo_BG_CtrlBaseScheme_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_CtrlBaseScheme","foreign_table_show_schema":"dbo.BG_CtrlBaseScheme","foreign_table_verbose":"BG_CtrlBaseScheme","foreign_table_verbose_show_schema":"dbo.BG_CtrlBaseScheme","foreign_table_object_id":"t3995","primary_table":"BG_CtrlBaseBillInfo","primary_table_show_schema":"dbo.BG_CtrlBaseBillInfo","primary_table_verbose":"BG_CtrlBaseBillInfo","primary_table_verbose_show_schema":"dbo.BG_CtrlBaseBillInfo","primary_table_object_id":"t3993","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cBillCode","foreign_column_path":null,"foreign_column":"cSourceBill"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_BG_CtrlBaseBillInfo","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cBillCode","name":"cBillCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};