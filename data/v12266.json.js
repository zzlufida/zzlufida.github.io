window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12266","name":"SA_SaleBillVouchsForStock","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW  SA_SaleBillVouchsForStock      \r\nAS      \r\nSELECT CASE WHEN iquantity > 0 THEN '030101' ELSE '0101' END AS Subject,       \r\n      abs(ISNULL(iQuantity, 0)) AS iquantity,       \r\n      abs(ISNULL(iNum, 0)) AS inum, cWhCode, salebillvouchs.cInvCode,       \r\n      cvmivencode, cBatch, '' AS DocumentType, sbvid AS DocumentId,       \r\n      autoid AS DocumentDId, case when lower(isnull(csrpolicy,'PE'))='PE' and isnull(isosid,0)<>0 then 1 else isnull(idemandtype,0) end AS DemandPlanType,case when lower(isnull(csrpolicy,'PE'))='PE' and isnull(isosid,0)<>0 then cast(isosid as nvarchar(30)\r\n) else isnull(cdemandid,N'') end AS DemandPlanDId,     \r\n      ISNULL(cFree1, N'') AS cfree1, ISNULL(cFree2, N'') AS cfree2,       \r\n      ISNULL(cFree3, N'') AS cfree3, ISNULL(cFree4, N'') AS cfree4, ISNULL(cFree5, N'')       \r\n      AS cfree5, ISNULL(cFree6, N'') AS cfree6, ISNULL(cFree7, N'') AS cfree7,       \r\n      ISNULL(cFree8, N'') AS cfree8, ISNULL(cFree9, N'') AS cfree9, ISNULL(cFree10, N'')       \r\n      AS cfree10, dMDate, dvDate, salebillvouchs.cMassUnit AS Imassunit, salebillvouchs.iMassDate AS Imassday,       \r\n      '' AS cBusType, '' AS cSource, '' AS dDate,isnull(iquantity,0) as ibillquantity,isnull(inum,0) as ibillnum,iExpiratDateCalcu,dExpirationdate,cExpirationdate      \r\nFROM  salebillvouchs inner join inventory on salebillvouchs.cinvcode=inventory.cinvcode  \r\nWHERE ISNULL(cWhCode, '') <> '' and ISNULL(cparentcode,N'')=N''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_SaleBillVouchsForStock"},{"field":"Type","value":"View"}],"columns":[{"id":"column-291207","object_id":"column-291207","name":"Subject","name_without_path":"Subject","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291208","object_id":"column-291208","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291209","object_id":"column-291209","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291210","object_id":"column-291210","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291211","object_id":"column-291211","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291212","object_id":"column-291212","name":"cvmivencode","name_without_path":"cvmivencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291213","object_id":"column-291213","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291214","object_id":"column-291214","name":"DocumentType","name_without_path":"DocumentType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291215","object_id":"column-291215","name":"DocumentId","name_without_path":"DocumentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291240","object_id":"column-291240","name":"DocumentDId","name_without_path":"DocumentDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291216","object_id":"column-291216","name":"DemandPlanType","name_without_path":"DemandPlanType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291217","object_id":"column-291217","name":"DemandPlanDId","name_without_path":"DemandPlanDId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291218","object_id":"column-291218","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291219","object_id":"column-291219","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291220","object_id":"column-291220","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291221","object_id":"column-291221","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291222","object_id":"column-291222","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291223","object_id":"column-291223","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291224","object_id":"column-291224","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291225","object_id":"column-291225","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291226","object_id":"column-291226","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291227","object_id":"column-291227","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291228","object_id":"column-291228","name":"dMDate","name_without_path":"dMDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291229","object_id":"column-291229","name":"dvDate","name_without_path":"dvDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291230","object_id":"column-291230","name":"Imassunit","name_without_path":"Imassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291231","object_id":"column-291231","name":"Imassday","name_without_path":"Imassday","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291232","object_id":"column-291232","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291233","object_id":"column-291233","name":"cSource","name_without_path":"cSource","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291234","object_id":"column-291234","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291235","object_id":"column-291235","name":"ibillquantity","name_without_path":"ibillquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291236","object_id":"column-291236","name":"ibillnum","name_without_path":"ibillnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291237","object_id":"column-291237","name":"iExpiratDateCalcu","name_without_path":"iExpiratDateCalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291238","object_id":"column-291238","name":"dExpirationdate","name_without_path":"dExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291239","object_id":"column-291239","name":"cExpirationdate","name_without_path":"cExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};