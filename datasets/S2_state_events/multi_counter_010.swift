import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc010-a: \(a)")
            Text("mc010-b: \(b)")
            Text("mc010-c: \(c)")
            HStack {
                Button("mc010-incA") { a += 1 }
                Button("mc010-incB") { b += 2 }
                Button("mc010-incC") { c += 3 }
            }
            HStack {
                Button("mc010-rstA") { a = 0 }
                Button("mc010-rstB") { b = 0 }
                Button("mc010-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
