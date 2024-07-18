window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4579","name":"CM_BalanceDetail","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_BalanceDetail"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-45909","object_id":"column-45909","name":"BalancesGUID","name_without_path":"BalancesGUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4582","name":"CM_Balances","name_show_schema":"dbo.CM_Balances"}]},{"id":"column-45910","object_id":"column-45910","name":"intAutoID","name_without_path":"intAutoID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45911","object_id":"column-45911","name":"decMoney","name_without_path":"decMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45912","object_id":"column-45912","name":"decExchangeRate","name_without_path":"decExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"8, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45913","object_id":"column-45913","name":"cBill","name_without_path":"cBill","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45914","object_id":"column-45914","name":"cItem","name_without_path":"cItem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45915","object_id":"column-45915","name":"cBalance","name_without_path":"cBalance","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45916","object_id":"column-45916","name":"dtBalanceDate","name_without_path":"dtBalanceDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45917","object_id":"column-45917","name":"cBillClass","name_without_path":"cBillClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45918","object_id":"column-45918","name":"intTemplateShowID","name_without_path":"intTemplateShowID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45919","object_id":"column-45919","name":"intTemplatePrintID","name_without_path":"intTemplatePrintID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45920","object_id":"column-45920","name":"Modifytamp","name_without_path":"Modifytamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45921","object_id":"column-45921","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45922","object_id":"column-45922","name":"cBalanceID","name_without_path":"cBalanceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45923","object_id":"column-45923","name":"strSpare1","name_without_path":"strSpare1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45924","object_id":"column-45924","name":"strSpare2","name_without_path":"strSpare2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45925","object_id":"column-45925","name":"strSpare3","name_without_path":"strSpare3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45926","object_id":"column-45926","name":"decRMB","name_without_path":"decRMB","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45927","object_id":"column-45927","name":"DetailGuid","name_without_path":"DetailGuid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45928","object_id":"column-45928","name":"cCancelNo","name_without_path":"cCancelNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45929","object_id":"column-45929","name":"cProcStyle","name_without_path":"cProcStyle","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45930","object_id":"column-45930","name":"ExecPieceNum","name_without_path":"ExecPieceNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"9, 4","is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-45931","object_id":"column-45931","name":"cExecID","name_without_path":"cExecID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_CM_BalanceDetail_CM_Balances","title":null,"description":null,"is_user_defined":false,"foreign_table":"CM_BalanceDetail","foreign_table_show_schema":"dbo.CM_BalanceDetail","foreign_table_verbose":"CM_BalanceDetail","foreign_table_verbose_show_schema":"dbo.CM_BalanceDetail","foreign_table_object_id":"t4579","primary_table":"CM_Balances","primary_table_show_schema":"dbo.CM_Balances","primary_table_verbose":"CM_Balances","primary_table_verbose_show_schema":"dbo.CM_Balances","primary_table_object_id":"t4582","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"BalancesGuid","foreign_column_path":null,"foreign_column":"BalancesGUID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_CM_BalanceDetail","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"intAutoID","name":"intAutoID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};