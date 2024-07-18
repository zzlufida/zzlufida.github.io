window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9806","name":"AA_Inventory_ColumnDicView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW [dbo].[AA_Inventory_ColumnDicView] AS SELECT cKey,cFld,cCaption,iColPos,cOrder,IsEnum,EnumType,EnumTypeString,ReferType,cPointBit,LocaleID,cCaptionPar from ufmeta_999..AA_ColumnDic_base  where LocaleID=DBO.UDF_GetLocaleID() and ((cKey='inventory' and cCaptionPar<>'' and cfld not like '%name'and cfld <> 'cInvCode'and cfld <> 'cInvCCode'and cfld <> 'bProduceByFeatureAllocate'and cfld <> 'cProjectExplain'and cfld <> 'v_mps_atp_Description'and cfld <> 'cACCode' and cfld not in (select cDicDbName from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'b'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bCheck'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bConfig'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bOMPrice'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bPurPrice'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bSalePrice'+substring(cDicDbName,2,6) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'bControl'+substring(cDicDbName,2,4)+'Range'+substring(cDicDbName,6,2) from userdef where cClass='存货' and isnull(cItemName,'')='') and cfld not in (select 'b'+substring(cDicDbName,2,15) from userdef where cClass='批次属性' and isnull(cItemName,'')='')) or (cKey ='inventory'  and (cFld ='cInvName'or cFld ='CcurrencyName' or cFld ='CEnglishName' or cFld ='CNotPatentName')))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AA_Inventory_ColumnDicView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-156526","object_id":"column-156526","name":"cKey","name_without_path":"cKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156527","object_id":"column-156527","name":"cFld","name_without_path":"cFld","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156528","object_id":"column-156528","name":"cCaption","name_without_path":"cCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156529","object_id":"column-156529","name":"iColPos","name_without_path":"iColPos","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156530","object_id":"column-156530","name":"cOrder","name_without_path":"cOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156531","object_id":"column-156531","name":"IsEnum","name_without_path":"IsEnum","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156532","object_id":"column-156532","name":"EnumType","name_without_path":"EnumType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156533","object_id":"column-156533","name":"EnumTypeString","name_without_path":"EnumTypeString","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156534","object_id":"column-156534","name":"ReferType","name_without_path":"ReferType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156535","object_id":"column-156535","name":"cPointBit","name_without_path":"cPointBit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156536","object_id":"column-156536","name":"LocaleID","name_without_path":"LocaleID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156537","object_id":"column-156537","name":"cCaptionPar","name_without_path":"cCaptionPar","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};