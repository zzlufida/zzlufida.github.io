window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12893","name":"v_ex_BookApplicateClosure","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.v_ex_BookApplicateClosure   \r\nas\r\n--核销申报表报表视图\r\n--累计进口量=累计入库量-转入量\r\n--成品净耗=成品累计出库量*单耗\r\n--成品损耗 =子件损耗率*对应出口数量*单耗+母件损耗率*对应出口数量*单耗/（1-母件损耗率）\r\n--不良品消耗量=对应不良品累计量*单耗（1+子件损耗率）/（1-母件损耗率）\r\n--总净耗=所有成品净耗之和\r\n--总损耗=所有损耗之和\r\n--总耗=总净耗+总损耗\r\n--不良品消耗总量=所有不良品消耗之和\r\n--海关余量=累计进口量-总耗\r\n--预计可转出量=海关余量-不良品消耗总量\r\n--实际转出量=转出量。\r\nselect book.cciqbookcode,book.cciqbookcode 手册号,im.irowno 序号,im.cinvcode 存货编码,im.cinvname 存货名称,im.cinvstd 规格型号,im.cciqcode 海关编码,im.cciqname 海关名称,\r\nim.ccomunitname 计量单位名称,isnull(im.finquantity,0) 实际进口数量,waste.cexinvname 对应成品名称,ex.foutquantity 出口数量,\r\n(isnull(waste.fquantity,0)*(1+isnull(waste.fwastequantity,0)/100))/(1-isnull(waste.fwholequantity,0)/100) 单耗,\r\nisnull(im.finquantity,0)-总净耗-总损耗 as  剩余数量,\r\nisnull(im.ftransferinquantity,0) as 转入量,-- 转入量=转入量\r\nisnull(im.finquantity,0) -isnull(im.ftransferinquantity,0)  as 累计进口量,\r\nisnull(ex.foutquantity,0)*isnull(waste.fquantity,0) as 成品净耗,\r\n((isnull(waste.fwastequantity,0)/100)*isnull(ex.foutquantity,0)*isnull(waste.fquantity,0)+  isnull(waste.fwholequantity,0)/100*isnull(ex.foutquantity,0)*isnull(waste.fquantity,0)/(1-isnull(waste.fwholequantity,0)/100)) as 成品损耗,\r\nisnull(frejectquantity,0)*isnull(waste.fquantity,0)*(1+isnull(waste.fwastequantity,0)/100)/(1-isnull(waste.fwholequantity,0)/100) as 不良品消耗量,\r\n总净耗,总损耗,总净耗+总损耗 as  总耗,不良品消耗总量,\r\nisnull(im.finquantity,0) -isnull(im.ftransferinquantity,0)-总净耗-总损耗 as 海关余量,\r\nisnull(im.finquantity,0) -isnull(im.ftransferinquantity,0)-总净耗-总损耗- 不良品消耗总量 as 预计可转出量,\r\nisnull(im.ftransferoutquantity,0) as 实际转出量,\r\nisnull(im.frejectqty,0) as 累计核准报废数量, \r\nisnull(im.fotheroutqty,0) as 累计其他转出数量, \r\nisnull(im.fotherinqty,0) as 累计其他转入数量  \r\nfrom v_ex_ciqbook book left join v_ex_ciqbookim im on book.id=im.id\r\nleft join v_ex_ciqbookwaste waste on book.id=waste.id and im.cinvcode=waste.ciminvcode\r\nleft join v_ex_ciqbookex ex on book.id=ex.id and waste.cexinvcode=ex.cinvcode \r\nleft join \r\n(select cciqbookcode,im.cinvcode,isnull(sum(ex.foutquantity*waste.fquantity),0) as 总净耗,\r\nsum((isnull(waste.fwastequantity,0)/100)*isnull(ex.foutquantity,0)*isnull(waste.fquantity,0)+ (isnull(waste.fwholequantity,0)/100)*isnull(ex.foutquantity,0)*isnull(waste.fquantity,0)/(1-isnull(waste.fwholequantity,0)/100))as 总损耗,\r\nsum(isnull(frejectquantity,0)*isnull(waste.fquantity,0)*(1+isnull(waste.fwastequantity,0)/100)/(1-isnull(waste.fwholequantity,0)/100)) as 不良品消耗总量\r\nfrom v_ex_ciqbook book left join v_ex_ciqbookim im on book.id=im.id\r\nleft join v_ex_ciqbookwaste waste on book.id=waste.id and im.cinvcode=waste.ciminvcode\r\nleft join v_ex_ciqbookex ex on book.id=ex.id and waste.cexinvcode=ex.cinvcode \r\ngroup by cciqbookcode,im.cinvcode) xh on book.cciqbookcode=xh.cciqbookcode and im.cinvcode=xh.cinvcode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_BookApplicateClosure"},{"field":"Type","value":"View"}],"columns":[{"id":"column-325295","object_id":"column-325295","name":"cciqbookcode","name_without_path":"cciqbookcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325296","object_id":"column-325296","name":"手册号","name_without_path":"手册号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325297","object_id":"column-325297","name":"序号","name_without_path":"序号","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325298","object_id":"column-325298","name":"存货编码","name_without_path":"存货编码","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325299","object_id":"column-325299","name":"存货名称","name_without_path":"存货名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325300","object_id":"column-325300","name":"规格型号","name_without_path":"规格型号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325301","object_id":"column-325301","name":"海关编码","name_without_path":"海关编码","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325302","object_id":"column-325302","name":"海关名称","name_without_path":"海关名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325303","object_id":"column-325303","name":"计量单位名称","name_without_path":"计量单位名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325304","object_id":"column-325304","name":"实际进口数量","name_without_path":"实际进口数量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325305","object_id":"column-325305","name":"对应成品名称","name_without_path":"对应成品名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325306","object_id":"column-325306","name":"出口数量","name_without_path":"出口数量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325307","object_id":"column-325307","name":"单耗","name_without_path":"单耗","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325308","object_id":"column-325308","name":"剩余数量","name_without_path":"剩余数量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325309","object_id":"column-325309","name":"转入量","name_without_path":"转入量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325310","object_id":"column-325310","name":"累计进口量","name_without_path":"累计进口量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"29, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325311","object_id":"column-325311","name":"成品净耗","name_without_path":"成品净耗","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325312","object_id":"column-325312","name":"成品损耗","name_without_path":"成品损耗","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325313","object_id":"column-325313","name":"不良品消耗量","name_without_path":"不良品消耗量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325314","object_id":"column-325314","name":"总净耗","name_without_path":"总净耗","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325315","object_id":"column-325315","name":"总损耗","name_without_path":"总损耗","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325316","object_id":"column-325316","name":"总耗","name_without_path":"总耗","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325317","object_id":"column-325317","name":"不良品消耗总量","name_without_path":"不良品消耗总量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325318","object_id":"column-325318","name":"海关余量","name_without_path":"海关余量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325319","object_id":"column-325319","name":"预计可转出量","name_without_path":"预计可转出量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325320","object_id":"column-325320","name":"实际转出量","name_without_path":"实际转出量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325321","object_id":"column-325321","name":"累计核准报废数量","name_without_path":"累计核准报废数量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325322","object_id":"column-325322","name":"累计其他转出数量","name_without_path":"累计其他转出数量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325323","object_id":"column-325323","name":"累计其他转入数量","name_without_path":"累计其他转入数量","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};