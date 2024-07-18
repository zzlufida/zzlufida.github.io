window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10103","name":"CAQ_Detail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.CAQ_Detail\r\nAS\r\nSELECT CA_AmoCt.iPeriod, CA_AmoCt.cPPID, CA_AmoCt.cBatch, MAX(caq_coreal.version) AS version, \r\n      MAX(caq_coreal.identcode) AS identcode, MAX(caq_coreal.imoroutesn) \r\n      AS imoroutesn, MAX(caq_coreal.cmocode) AS cmocode, MAX(caq_coreal.imosubsn) \r\n      AS imosubsn, MAX(caq_coreal.cDeptid) AS cDeptCode, MAX(caq_coreal.cDepName) \r\n      AS cDeptName, MAX(caq_coreal.invcode) AS invcode, MAX(caq_coreal.cInvName) \r\n      AS cInvName, MAX(caq_coreal.free1) AS free1, MAX(caq_coreal.free2) AS free2, \r\n      MAX(caq_coreal.free3) AS free3, MAX(caq_coreal.free4) AS free4, \r\n      MAX(caq_coreal.free5) AS free5, MAX(caq_coreal.free6) AS free6, \r\n      MAX(caq_coreal.free7) AS free7, MAX(caq_coreal.free8) AS free8, \r\n      MAX(caq_coreal.free9) AS free9, MAX(caq_coreal.free10) AS free10, \r\n      MAX(caq_coreal.cInvStd) AS cInvStd, MAX(caq_coreal.cInvM_Unit) AS cInvUnit,  \r\n      CASE WHEN MAX(ca_amoct.ifinqua) = 0 THEN 0 ELSE SUM(iqua) \r\n      * (1 - MAX(onpration)) / (CASE WHEN MAX(ca_amoct.ifinqua) \r\n      = 0 THEN 1 ELSE MAX(ca_amoct.ifinqua) END) END AS 完工产品数量单位成本, \r\n      SUM(iqua) * (1 - MAX(onpration)) AS 完工产品数量总成本, SUM(iqua) \r\n      AS 产品数量总成本, SUM(itotalamo) AS 产品金额总成本, SUM(iqua) \r\n      * MAX(onpration) AS 在产数量总成本,\r\n      SUM(CA_AmoCt.iOnpTotalAmo) AS iOnpSumAmo, \r\n      SUM((CASE WHEN [CA_AmoCt].[iPeriod] = 0 THEN 0 ELSE [CA_AmoCt].[iTotalAmo] - [CA_AmoCt].[iOnpTotalAmo]\r\n       END)) AS iFinTotalAmo, SUM(CA_AmoCt.iFinPdtUnitAmo) AS iFinPdtUnitAmo, \r\n      cType = (CASE [CA_AmoCt].[cAmotype] WHEN '0' THEN N'材料费用' WHEN '1' THEN N'人工费用'\r\n       WHEN '2' THEN N'辅助费用' WHEN '3' THEN N'制造费用' ELSE N'其他费用' END)\r\nFROM caq_coreal INNER JOIN\r\n      (CA_AmoCt INNER JOIN\r\n      CAQ_RptBase ON (CA_AmoCt.cPPID = CAQ_RptBase.cPPID) AND \r\n      (CA_AmoCt.cBatch = CAQ_RptBase.cBatch) AND \r\n      (CA_AmoCt.iPeriod = CAQ_RptBase.iPeriod)) ON \r\n      caq_coreal.irealcoid = CA_AmoCt.cPPID\r\nGROUP BY CA_AmoCt.iPeriod, CA_AmoCt.cPPID, CA_AmoCt.cBatch, CA_AmoCt.cAmotype","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CAQ_Detail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174060","object_id":"column-174060","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174061","object_id":"column-174061","name":"cPPID","name_without_path":"cPPID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174062","object_id":"column-174062","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174063","object_id":"column-174063","name":"version","name_without_path":"version","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174064","object_id":"column-174064","name":"identcode","name_without_path":"identcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174065","object_id":"column-174065","name":"imoroutesn","name_without_path":"imoroutesn","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174066","object_id":"column-174066","name":"cmocode","name_without_path":"cmocode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174067","object_id":"column-174067","name":"imosubsn","name_without_path":"imosubsn","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174068","object_id":"column-174068","name":"cDeptCode","name_without_path":"cDeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174069","object_id":"column-174069","name":"cDeptName","name_without_path":"cDeptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174070","object_id":"column-174070","name":"invcode","name_without_path":"invcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174071","object_id":"column-174071","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174072","object_id":"column-174072","name":"free1","name_without_path":"free1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174073","object_id":"column-174073","name":"free2","name_without_path":"free2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174074","object_id":"column-174074","name":"free3","name_without_path":"free3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174075","object_id":"column-174075","name":"free4","name_without_path":"free4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174076","object_id":"column-174076","name":"free5","name_without_path":"free5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174077","object_id":"column-174077","name":"free6","name_without_path":"free6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174078","object_id":"column-174078","name":"free7","name_without_path":"free7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174079","object_id":"column-174079","name":"free8","name_without_path":"free8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174080","object_id":"column-174080","name":"free9","name_without_path":"free9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174081","object_id":"column-174081","name":"free10","name_without_path":"free10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174082","object_id":"column-174082","name":"cInvStd","name_without_path":"cInvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174083","object_id":"column-174083","name":"cInvUnit","name_without_path":"cInvUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174084","object_id":"column-174084","name":"完工产品数量单位成本","name_without_path":"完工产品数量单位成本","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174085","object_id":"column-174085","name":"完工产品数量总成本","name_without_path":"完工产品数量总成本","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174086","object_id":"column-174086","name":"产品数量总成本","name_without_path":"产品数量总成本","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174087","object_id":"column-174087","name":"产品金额总成本","name_without_path":"产品金额总成本","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174088","object_id":"column-174088","name":"在产数量总成本","name_without_path":"在产数量总成本","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174089","object_id":"column-174089","name":"iOnpSumAmo","name_without_path":"iOnpSumAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174090","object_id":"column-174090","name":"iFinTotalAmo","name_without_path":"iFinTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174091","object_id":"column-174091","name":"iFinPdtUnitAmo","name_without_path":"iFinPdtUnitAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174092","object_id":"column-174092","name":"cType","name_without_path":"cType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};