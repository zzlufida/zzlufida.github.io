window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9309","name":"UA_Voucher","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UA_Voucher"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-149290","object_id":"column-149290","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149291","object_id":"column-149291","name":"strVoucherType","name_without_path":"strVoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149292","object_id":"column-149292","name":"strVoucherID","name_without_path":"strVoucherID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149293","object_id":"column-149293","name":"strBillID","name_without_path":"strBillID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149294","object_id":"column-149294","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149295","object_id":"column-149295","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9295","name":"UA_UnitDef","name_show_schema":"dbo.UA_UnitDef"}]},{"id":"column-149296","object_id":"column-149296","name":"strUnitName","name_without_path":"strUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149297","object_id":"column-149297","name":"strOpration","name_without_path":"strOpration","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149298","object_id":"column-149298","name":"strBalanceType","name_without_path":"strBalanceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149299","object_id":"column-149299","name":"strBalanceObj","name_without_path":"strBalanceObj","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149300","object_id":"column-149300","name":"strBalanceBank","name_without_path":"strBalanceBank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149301","object_id":"column-149301","name":"strBalanceAcc","name_without_path":"strBalanceAcc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149302","object_id":"column-149302","name":"strSourceUnit","name_without_path":"strSourceUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149303","object_id":"column-149303","name":"strAccBankID","name_without_path":"strAccBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9215","name":"UA_BankDef","name_show_schema":"dbo.UA_BankDef"}]},{"id":"column-149304","object_id":"column-149304","name":"strCurrencyID","name_without_path":"strCurrencyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149305","object_id":"column-149305","name":"sngExchangeRate","name_without_path":"sngExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149306","object_id":"column-149306","name":"strDigest","name_without_path":"strDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149307","object_id":"column-149307","name":"intAppendVoucherNum","name_without_path":"intAppendVoucherNum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149308","object_id":"column-149308","name":"strLeader","name_without_path":"strLeader","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149309","object_id":"column-149309","name":"strBalancePerson","name_without_path":"strBalancePerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149310","object_id":"column-149310","name":"strRecorder","name_without_path":"strRecorder","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149311","object_id":"column-149311","name":"strAuditor","name_without_path":"strAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149312","object_id":"column-149312","name":"strReAuditor","name_without_path":"strReAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149313","object_id":"column-149313","name":"strVoucherer","name_without_path":"strVoucherer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149314","object_id":"column-149314","name":"dblValue","name_without_path":"dblValue","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149315","object_id":"column-149315","name":"dblTotal","name_without_path":"dblTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149316","object_id":"column-149316","name":"strTotal","name_without_path":"strTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149317","object_id":"column-149317","name":"bolFlag","name_without_path":"bolFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149318","object_id":"column-149318","name":"strCorrect","name_without_path":"strCorrect","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149319","object_id":"column-149319","name":"bolBankSure","name_without_path":"bolBankSure","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149320","object_id":"column-149320","name":"strDefine1","name_without_path":"strDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149321","object_id":"column-149321","name":"strDefine2","name_without_path":"strDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149322","object_id":"column-149322","name":"strDefine3","name_without_path":"strDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149323","object_id":"column-149323","name":"strDefine4","name_without_path":"strDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149324","object_id":"column-149324","name":"strDefine5","name_without_path":"strDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149325","object_id":"column-149325","name":"strDefine6","name_without_path":"strDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149326","object_id":"column-149326","name":"strDefine7","name_without_path":"strDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149327","object_id":"column-149327","name":"strDefine8","name_without_path":"strDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149328","object_id":"column-149328","name":"strDefine9","name_without_path":"strDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149329","object_id":"column-149329","name":"strDefine10","name_without_path":"strDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149330","object_id":"column-149330","name":"strDefine11","name_without_path":"strDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149331","object_id":"column-149331","name":"strDefine12","name_without_path":"strDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149332","object_id":"column-149332","name":"strDefine13","name_without_path":"strDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149333","object_id":"column-149333","name":"strDefine14","name_without_path":"strDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149334","object_id":"column-149334","name":"strReturnID","name_without_path":"strReturnID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149335","object_id":"column-149335","name":"dblTValue","name_without_path":"dblTValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149336","object_id":"column-149336","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"8001","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_UA_Voucher_UA_BankDef","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_Voucher","foreign_table_show_schema":"dbo.UA_Voucher","foreign_table_verbose":"UA_Voucher","foreign_table_verbose_show_schema":"dbo.UA_Voucher","foreign_table_object_id":"t9309","primary_table":"UA_BankDef","primary_table_show_schema":"dbo.UA_BankDef","primary_table_verbose":"UA_BankDef","primary_table_verbose_show_schema":"dbo.UA_BankDef","primary_table_object_id":"t9215","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strAccBankID","foreign_column_path":null,"foreign_column":"strAccBankID"}],"custom_fields":{}},{"name":"FK_UA_Voucher_UA_UnitDef","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_Voucher","foreign_table_show_schema":"dbo.UA_Voucher","foreign_table_verbose":"UA_Voucher","foreign_table_verbose_show_schema":"dbo.UA_Voucher","foreign_table_object_id":"t9309","primary_table":"UA_UnitDef","primary_table_show_schema":"dbo.UA_UnitDef","primary_table_verbose":"UA_UnitDef","primary_table_verbose_show_schema":"dbo.UA_UnitDef","primary_table_object_id":"t9295","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strUnitID","foreign_column_path":null,"foreign_column":"strUnitID"}],"custom_fields":{}},{"name":"FK_UA_SubVoucher_UA_Voucher","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_SubVoucher","foreign_table_show_schema":"dbo.UA_SubVoucher","foreign_table_verbose":"UA_SubVoucher","foreign_table_verbose_show_schema":"dbo.UA_SubVoucher","foreign_table_object_id":"t9290","primary_table":"UA_Voucher","primary_table_show_schema":"dbo.UA_Voucher","primary_table_verbose":"UA_Voucher","primary_table_verbose_show_schema":"dbo.UA_Voucher","primary_table_object_id":"t9309","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"intNoID","foreign_column_path":null,"foreign_column":"intNoID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UA_Voucher","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"intNoID","name":"intNoID"}],"custom_fields":{}},{"name":"IX_UA_Voucher","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"strVoucherID","name":"strVoucherID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};