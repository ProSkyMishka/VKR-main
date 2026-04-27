import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...12, id: \.self) { k in
                Text("lx017-row \(k)")
            }
        }
    }
}
