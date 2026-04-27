import SwiftUI

struct ABbp009: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp009-Aplus") { a += 1 }
            Button("bp009-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp009-A=\(a) B=\(b)")
            ABbp009(a: $a, b: $b)
        }
        .padding()
    }
}
