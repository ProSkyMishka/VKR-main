import SwiftUI

struct ABbp007: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp007-Aplus") { a += 1 }
            Button("bp007-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp007-A=\(a) B=\(b)")
            ABbp007(a: $a, b: $b)
        }
        .padding()
    }
}
