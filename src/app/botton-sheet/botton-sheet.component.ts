import {Component, OnInit} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-botton-sheet',
  templateUrl: './botton-sheet.component.html',
  styleUrls: ['./botton-sheet.component.css']
})

export class BottonSheetComponent implements OnInit {


  ngOnInit() {
  }

  constructor(private bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
