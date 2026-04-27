import SwiftUI

struct ABbp001: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp001-Aplus") { a += 1 }
            Button("bp001-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp001-A=\(a) B=\(b)")
            ABbp001(a: $a, b: $b)
        }
        .padding()
    }
}
