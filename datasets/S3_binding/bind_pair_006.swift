import SwiftUI

struct ABbp006: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp006-Aplus") { a += 1 }
            Button("bp006-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp006-A=\(a) B=\(b)")
            ABbp006(a: $a, b: $b)
        }
        .padding()
    }
}
