window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12267","name":"SA_SaleBillVouchsForTrack","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW  SA_SaleBillVouchsForTrack    \r\nAS    \r\nSELECT csbvcode as ccode,ddate,cDepCode,cPersonCode,salebillvouchs.cVenCode,salebillvouchs.cItem_class,salebillvouchs.cItemCode,citemname as cName,cItem_CName as cItemCName,cDefine22,cDefine23,cDefine24,cDefine25,cDefine26,cDefine27,cDefine28,cDefine29,cDefine30,cDefine31,cDefine32,cDefine33,cDefine34,cDefine35,cDefine36,cDefine37,cinvouchtype,ibatch,  \r\n      ISNULL(iQuantity, 0) - ISNULL(fOutQuantity, 0) AS iquantity, cBatchProperty1,cBatchProperty2,cBatchProperty3,cBatchProperty4,cBatchProperty5,cBatchProperty6,cBatchProperty7,cBatchProperty8,cBatchProperty9,cBatchProperty10,  \r\n      case when igrouptype=2 then ISNULL(iNum, 0) - ISNULL(fOutNum, 0) else 0 end AS inum, cWhCode, salebillvouchs.cInvCode, iinvexchrate,cunitid as cassunitcode,      \r\n      cvmivencode, cBatch, '' AS DocumentType, salebillvouch.sbvid AS DocumentId,     \r\n      autoid AS DocumentDId,case when lower(isnull(csrpolicy,'PE'))='PE' and isnull(isosid,0)<>0 then 1 else isnull(idemandtype,0) end AS DemandPlanType,case when lower(isnull(csrpolicy,'PE'))='PE' and isnull(isosid,0)<>0 then cast(isosid as nvarchar(30))\r\n else isnull(cdemandid,N'') end AS DemandPlanDId, cdemandcode,idemandseq,  \r\n      ISNULL(cFree1, N'') AS cfree1, ISNULL(cFree2, N'') AS cfree2,     \r\n      ISNULL(cFree3, N'') AS cfree3, ISNULL(cFree4, N'') AS cfree4, ISNULL(cFree5, N'')     \r\n      AS cfree5, ISNULL(cFree6, N'') AS cfree6, ISNULL(cFree7, N'') AS cfree7,     \r\n      ISNULL(cFree8, N'') AS cfree8, ISNULL(cFree9, N'') AS cfree9, ISNULL(cFree10, N'')     \r\n      AS cfree10, dMDate, dvDate, salebillvouchs.cMassUnit AS Imassunit, salebillvouchs.iMassDate AS Imassday,     \r\n      '' AS cBusType, '' AS cSource, isnull(iquantity,0) as ibillquantity,isnull(inum,0) as ibillnum,iExpiratDateCalcu,dExpirationdate,cExpirationdate    \r\nFROM  salebillvouchs inner join salebillvouch on salebillvouchs.sbvid=salebillvouch.sbvid inner join inventory on inventory.cinvcode=salebillvouchs.cinvcode  \r\nWHERE isnull(btrack,0)=1  and ISNULL(cparentcode,N'')=N'' and (ISNULL(cWhCode, '') <> '')  and isnull(ibatch,0)<>0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_SaleBillVouchsForTrack"},{"field":"Type","value":"View"}],"columns":[{"id":"column-291241","object_id":"column-291241","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291242","object_id":"column-291242","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291243","object_id":"column-291243","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291244","object_id":"column-291244","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291245","object_id":"column-291245","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291246","object_id":"column-291246","name":"cItem_class","name_without_path":"cItem_class","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291247","object_id":"column-291247","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291248","object_id":"column-291248","name":"cName","name_without_path":"cName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291249","object_id":"column-291249","name":"cItemCName","name_without_path":"cItemCName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291250","object_id":"column-291250","name":"cDefine22","name_without_path":"cDefine22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291251","object_id":"column-291251","name":"cDefine23","name_without_path":"cDefine23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291252","object_id":"column-291252","name":"cDefine24","name_without_path":"cDefine24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291313","object_id":"column-291313","name":"cDefine25","name_without_path":"cDefine25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291253","object_id":"column-291253","name":"cDefine26","name_without_path":"cDefine26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291254","object_id":"column-291254","name":"cDefine27","name_without_path":"cDefine27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291255","object_id":"column-291255","name":"cDefine28","name_without_path":"cDefine28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291256","object_id":"column-291256","name":"cDefine29","name_without_path":"cDefine29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291257","object_id":"column-291257","name":"cDefine30","name_without_path":"cDefine30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291258","object_id":"column-291258","name":"cDefine31","name_without_path":"cDefine31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291259","object_id":"column-291259","name":"cDefine32","name_without_path":"cDefine32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291260","object_id":"column-291260","name":"cDefine33","name_without_path":"cDefine33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291261","object_id":"column-291261","name":"cDefine34","name_without_path":"cDefine34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291262","object_id":"column-291262","name":"cDefine35","name_without_path":"cDefine35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291263","object_id":"column-291263","name":"cDefine36","name_without_path":"cDefine36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291264","object_id":"column-291264","name":"cDefine37","name_without_path":"cDefine37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291265","object_id":"column-291265","name":"cinvouchtype","name_without_path":"cinvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291266","object_id":"column-291266","name":"ibatch","name_without_path":"ibatch","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291267","object_id":"column-291267","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"31, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291268","object_id":"column-291268","name":"cBatchProperty1","name_without_path":"cBatchProperty1","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291269","object_id":"column-291269","name":"cBatchProperty2","name_without_path":"cBatchProperty2","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291270","object_id":"column-291270","name":"cBatchProperty3","name_without_path":"cBatchProperty3","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291271","object_id":"column-291271","name":"cBatchProperty4","name_without_path":"cBatchProperty4","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291272","object_id":"column-291272","name":"cBatchProperty5","name_without_path":"cBatchProperty5","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291273","object_id":"column-291273","name":"cBatchProperty6","name_without_path":"cBatchProperty6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291274","object_id":"column-291274","name":"cBatchProperty7","name_without_path":"cBatchProperty7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291275","object_id":"column-291275","name":"cBatchProperty8","name_without_path":"cBatchProperty8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291276","object_id":"column-291276","name":"cBatchProperty9","name_without_path":"cBatchProperty9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291277","object_id":"column-291277","name":"cBatchProperty10","name_without_path":"cBatchProperty10","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291278","object_id":"column-291278","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"31, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291279","object_id":"column-291279","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291280","object_id":"column-291280","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291281","object_id":"column-291281","name":"iinvexchrate","name_without_path":"iinvexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291282","object_id":"column-291282","name":"cassunitcode","name_without_path":"cassunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291283","object_id":"column-291283","name":"cvmivencode","name_without_path":"cvmivencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291284","object_id":"column-291284","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291285","object_id":"column-291285","name":"DocumentType","name_without_path":"DocumentType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291286","object_id":"column-291286","name":"DocumentId","name_without_path":"DocumentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291287","object_id":"column-291287","name":"DocumentDId","name_without_path":"DocumentDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291288","object_id":"column-291288","name":"DemandPlanType","name_without_path":"DemandPlanType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291289","object_id":"column-291289","name":"DemandPlanDId","name_without_path":"DemandPlanDId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291290","object_id":"column-291290","name":"cdemandcode","name_without_path":"cdemandcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291291","object_id":"column-291291","name":"idemandseq","name_without_path":"idemandseq","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291292","object_id":"column-291292","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291293","object_id":"column-291293","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291294","object_id":"column-291294","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291295","object_id":"column-291295","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291296","object_id":"column-291296","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291297","object_id":"column-291297","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291298","object_id":"column-291298","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291299","object_id":"column-291299","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291300","object_id":"column-291300","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291301","object_id":"column-291301","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291302","object_id":"column-291302","name":"dMDate","name_without_path":"dMDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291303","object_id":"column-291303","name":"dvDate","name_without_path":"dvDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291304","object_id":"column-291304","name":"Imassunit","name_without_path":"Imassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291305","object_id":"column-291305","name":"Imassday","name_without_path":"Imassday","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291306","object_id":"column-291306","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291307","object_id":"column-291307","name":"cSource","name_without_path":"cSource","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291308","object_id":"column-291308","name":"ibillquantity","name_without_path":"ibillquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291309","object_id":"column-291309","name":"ibillnum","name_without_path":"ibillnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291310","object_id":"column-291310","name":"iExpiratDateCalcu","name_without_path":"iExpiratDateCalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291311","object_id":"column-291311","name":"dExpirationdate","name_without_path":"dExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-291312","object_id":"column-291312","name":"cExpirationdate","name_without_path":"cExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};