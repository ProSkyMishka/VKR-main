import SwiftUI

struct Childbi008: View {
    @Binding var n: Int
    var body: some View {
        Button("bi008-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi008-total: \(n)")
            Childbi008(n: $n)
        }
        .padding()
    }
}
