import SwiftUI

struct ABbp004: View {
    @Binding var a: Int
    @Binding var b: Int
    var body: some View {
        HStack {
            Button("bp004-Aplus") { a += 1 }
            Button("bp004-Bplus") { b += 1 }
        }
    }
}

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    var body: some View {
        VStack {
            Text("bp004-A=\(a) B=\(b)")
            ABbp004(a: $a, b: $b)
        }
        .padding()
    }
}
