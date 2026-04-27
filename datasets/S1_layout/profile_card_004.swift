import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc004-name")
                    .font(.title2)
                    .bold()
                Text("pc004-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc004-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc004-posts"); Text("\(14)").bold() }
                VStack { Text("pc004-followers"); Text("\(104)").bold() }
                VStack { Text("pc004-likes"); Text("\(1004)").bold() }
            }
        }
        .padding()
    }
}
