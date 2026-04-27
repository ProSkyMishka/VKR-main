import SwiftUI

struct ABbp010: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp010-Aplus") { a += 1 }
            Button("bp010-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp010-A=\(a) B=\(b)")
            ABbp010(a: $a, b: $b)
        }
        .padding()
    }
}
