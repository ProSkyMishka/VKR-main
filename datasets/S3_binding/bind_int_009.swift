import SwiftUI

struct Childbi009: View {
    @Binding var n: Int
    var body: some View {
        Button("bi009-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi009-total: \(n)")
            Childbi009(n: $n)
        }
        .padding()
    }
}
