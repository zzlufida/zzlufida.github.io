window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10023","name":"ATP_PROJECTMAINB","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/**\t870 ATP模拟方案增加字段 逾期需求天数 IOVERDUEDEMANDDAYS、逾期供应天数 IOVERDUESUPPLYDAYS\t**/\r\nCREATE  VIEW ATP_PROJECTMAINB AS \r\nSELECT \r\nATP_PROJECTMAIN.CPROJECTCODE,ATP_PROJECTMAIN.CPROJECTEXPLAIN,\r\nEM1.EnumName AS BMPS, \r\nEM2.EnumName AS BMRP, \r\nEM3.EnumName AS BSAFESTOCK, \r\nEM4.EnumName AS BPURCHASEORDER, \r\nEM5.EnumName AS BAPPLYORDER, \r\nEM6.EnumName AS BPRODUCTORDER , \r\nEM7.EnumName AS BENTRUSTORDER, \r\nEM8.EnumName AS BARRIVETEST,\r\nEM9.EnumName AS BATTEMPERNOARRIVE,\r\nEM10.EnumName AS BSALEORDER, \r\nEM11.EnumName AS BWAITSEND, \r\nEM12.EnumName AS BWKNOASKMATERIEL, \r\nEM13.EnumName AS BETNOASKMATERIEL, \r\nEM14.EnumName AS BATTEMPERNOOUT,\r\nEM15.EnumName AS BFREEZE,\r\nEM16.EnumName AS BALLWAREHOUSE, \r\nISNULL(iOverdueDemandDays,9999) as IOVERDUEDEMANDDAYS,\r\nISNULL(iOverdueSupplyDays,9999) as IOVERDUESUPPLYDAYS,\r\nCONVERT(CHAR, CONVERT(MONEY,ATP_PROJECTMAIN.UFTS), 2) AS UFTS\r\nFROM ATP_PROJECTMAIN\r\nLeft join V_AA_Enum EM1 On ISNULL(ATP_PROJECTMAIN.BMPS,0)=EM1.EnumIndex And EM1.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM2 On ISNULL(ATP_PROJECTMAIN.BMRP,0)=EM2.EnumIndex And EM2.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM3 On ISNULL(ATP_PROJECTMAIN.BSAFESTOCK,0)=EM3.EnumIndex And EM3.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM4 On ISNULL(ATP_PROJECTMAIN.BPURCHASEORDER,0)=EM4.EnumIndex And EM4.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM5 On ISNULL(ATP_PROJECTMAIN.BAPPLYORDER,0)=EM5.EnumIndex And EM5.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM6 On ISNULL(ATP_PROJECTMAIN.BPRODUCTORDER,0)=EM6.EnumIndex And EM6.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM7 On ISNULL(ATP_PROJECTMAIN.BENTRUSTORDER,0)=EM7.EnumIndex And EM7.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM8 On ISNULL(ATP_PROJECTMAIN.BARRIVETEST,0)=EM8.EnumIndex And EM8.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM9 On ISNULL(ATP_PROJECTMAIN.BATTEMPERNOARRIVE,0)=EM9.EnumIndex And EM9.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM10 On ISNULL(ATP_PROJECTMAIN.BSALEORDER,0)=EM10.EnumIndex And EM10.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM11 On ISNULL(ATP_PROJECTMAIN.BWAITSEND,0)=EM11.EnumIndex And EM11.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM12 On ISNULL(ATP_PROJECTMAIN.BWKNOASKMATERIEL,0)=EM12.EnumIndex And EM12.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM13 On ISNULL(ATP_PROJECTMAIN.BETNOASKMATERIEL,0)=EM13.EnumIndex And EM13.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM14 On ISNULL(ATP_PROJECTMAIN.BATTEMPERNOOUT,0)=EM14.EnumIndex And EM14.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM15 On ISNULL(ATP_PROJECTMAIN.BFREEZE,0)=EM15.EnumIndex And EM15.EnumType=N'PA.Boolean'\r\nLeft join V_AA_Enum EM16 On ISNULL(ATP_PROJECTMAIN.BALLWAREHOUSE,0)=EM16.EnumIndex And EM16.EnumType=N'PA.Boolean'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ATP_PROJECTMAINB"},{"field":"Type","value":"View"}],"columns":[{"id":"column-172844","object_id":"column-172844","name":"CPROJECTCODE","name_without_path":"CPROJECTCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172845","object_id":"column-172845","name":"CPROJECTEXPLAIN","name_without_path":"CPROJECTEXPLAIN","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172846","object_id":"column-172846","name":"BMPS","name_without_path":"BMPS","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172847","object_id":"column-172847","name":"BMRP","name_without_path":"BMRP","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172848","object_id":"column-172848","name":"BSAFESTOCK","name_without_path":"BSAFESTOCK","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172849","object_id":"column-172849","name":"BPURCHASEORDER","name_without_path":"BPURCHASEORDER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172850","object_id":"column-172850","name":"BAPPLYORDER","name_without_path":"BAPPLYORDER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172851","object_id":"column-172851","name":"BPRODUCTORDER","name_without_path":"BPRODUCTORDER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172852","object_id":"column-172852","name":"BENTRUSTORDER","name_without_path":"BENTRUSTORDER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172853","object_id":"column-172853","name":"BARRIVETEST","name_without_path":"BARRIVETEST","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172854","object_id":"column-172854","name":"BATTEMPERNOARRIVE","name_without_path":"BATTEMPERNOARRIVE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172855","object_id":"column-172855","name":"BSALEORDER","name_without_path":"BSALEORDER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172856","object_id":"column-172856","name":"BWAITSEND","name_without_path":"BWAITSEND","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172857","object_id":"column-172857","name":"BWKNOASKMATERIEL","name_without_path":"BWKNOASKMATERIEL","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172858","object_id":"column-172858","name":"BETNOASKMATERIEL","name_without_path":"BETNOASKMATERIEL","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172859","object_id":"column-172859","name":"BATTEMPERNOOUT","name_without_path":"BATTEMPERNOOUT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172860","object_id":"column-172860","name":"BFREEZE","name_without_path":"BFREEZE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172861","object_id":"column-172861","name":"BALLWAREHOUSE","name_without_path":"BALLWAREHOUSE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172862","object_id":"column-172862","name":"IOVERDUEDEMANDDAYS","name_without_path":"IOVERDUEDEMANDDAYS","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172863","object_id":"column-172863","name":"IOVERDUESUPPLYDAYS","name_without_path":"IOVERDUESUPPLYDAYS","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-172864","object_id":"column-172864","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};