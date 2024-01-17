import { SafeHtmlPipe } from './safe-html.pipe';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;

  beforeEach(() => {
    const sanitizerStub: DomSanitizer = {
      bypassSecurityTrustHtml: (value: string): SafeHtml => value as SafeHtml
    } as DomSanitizer;

    TestBed.configureTestingModule({
      providers: [
        { provide: DomSanitizer, useValue: sanitizerStub }
      ]
    });

    pipe = TestBed.inject(SafeHtmlPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
